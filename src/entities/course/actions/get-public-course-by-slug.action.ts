"use server";

import { notFound } from "next/navigation";

import { prisma } from "@/shared/database";

import { TGetPublicCourseBySlug } from "../types";

export async function GetPublicCourseBySlug(
	slug: string
): Promise<TGetPublicCourseBySlug> {
	try {
		const course = await prisma.course.findUnique({
			where: {
				slug
			},
			select: {
				id: true,
				title: true,
				smallDescription: true,
				description: true,
				price: true,
				imageUrl: true,
				slug: true,
				status: true,
				level: true,
				duration: true,
				category: true,
				chapters: {
					select: {
						id: true,
						title: true,
						position: true,
						lessons: {
							select: {
								id: true,
								title: true,
								position: true
							},
							orderBy: {
								position: "asc"
							}
						}
					},
					orderBy: {
						position: "asc"
					}
				}
			}
		});

		if (!course) {
			return notFound();
		}

		return course;
	} catch (error) {
		console.log("[Get public course by slug error]", error);
		return notFound();
	}
}
