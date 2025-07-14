"use server";

import { EnrollmentStatus } from "@prisma/client";
import { redirect } from "next/navigation";
import Stripe from "stripe";

import { ENUM_PATHS } from "@/shared/config";
import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";

import { ENUM_CRUD_COURSE_ERRORS } from "../config";
import { IActionResponse } from "../types";

export async function EnrollCourse(
	courseId: string
): Promise<IActionResponse | never> {
	const STRIPE = new Stripe(process.env.STRIPE_SECRET_KEY! as string, {
		apiVersion: "2025-06-30.basil",
		typescript: true
	});
	let checkoutUrl: string | null = null;

	try {
		const { userId, email } = await authHandler();

		const course = await prisma.course.findUnique({
			where: {
				id: courseId
			}
		});

		if (!course) {
			return {
				success: false,
				message: ENUM_CRUD_COURSE_ERRORS.NOT_FOUND
			};
		}

		let stripeCustomerId = "";
		const userWithStripeId = await prisma.user.findUnique({
			where: {
				id: userId
			},
			select: {
				stripeCustomerId: true
			}
		});

		if (userWithStripeId?.stripeCustomerId) {
			stripeCustomerId = userWithStripeId?.stripeCustomerId;
		} else {
			const customer = await STRIPE.customers.create({
				email: email,
				metadata: {
					userId
				}
			});
			stripeCustomerId = customer.id;
			await prisma.user.update({
				where: {
					id: userId
				},
				data: {
					stripeCustomerId
				}
			});
		}

		const result = await prisma.$transaction(async (tx) => {
			const existingEnrollment = await tx.enrollment.findUnique({
				where: {
					userId_courseId: {
						userId,
						courseId
					}
				},
				select: {
					id: true,
					status: true
				}
			});

			if (existingEnrollment?.status === EnrollmentStatus.Active) {
				return {
					success: true,
					message: ENUM_CRUD_COURSE_ERRORS.ALREADY_ENROLLED
				};
			}

			let enrollment;

			if (existingEnrollment) {
				enrollment = await tx.enrollment.update({
					where: {
						id: existingEnrollment.id
					},
					data: {
						amount: course.price,
						status: EnrollmentStatus.Pending,
						updatedAt: new Date()
					}
				});
			} else {
				enrollment = await tx.enrollment.create({
					data: {
						userId,
						courseId,
						amount: course.price,
						status: EnrollmentStatus.Pending
					}
				});
			}

			const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
				{
					quantity: 1,
					price_data: {
						currency: "usd",
						product_data: {
							name: course.title,
							images: [course.imageUrl],
							description: course.smallDescription
						},
						unit_amount: Math.round(course.price! * 100)
					}
				}
			];

			const session = await STRIPE.checkout.sessions.create({
				line_items,
				customer: stripeCustomerId,
				mode: "payment",
				success_url: `${process.env.NEXT_PUBLIC_APP_URL}/${ENUM_PATHS.PAYMENT.SUCCESS}?enrollmentId=${enrollment.id}`,
				cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/${ENUM_PATHS.PAYMENT.CANCEL}`,
				metadata: {
					courseId,
					userId,
					enrollmentId: enrollment.id
				}
			});

			return {
				enrollment: enrollment,
				checkoutUrl: session.url
			};
		});

		checkoutUrl = result.checkoutUrl || "";
	} catch (error) {
		console.error("[Enroll course error]", error);

		if (error instanceof Stripe.errors.StripeError) {
			return {
				success: false,
				message: ENUM_CRUD_COURSE_ERRORS.ENROLL_ERROR
			};
		}

		return {
			success: false,
			message: ENUM_CRUD_COURSE_ERRORS.FAILED
		};
	}

	redirect(checkoutUrl!);
}
