"use server";

import { EnrollmentStatus } from "@prisma/client";

import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";

import { TGetPublicCourse } from "../types";

export async function GetEnrolledCourses(): Promise<TGetPublicCourse[]> {
	try {
		const { userId } = await authHandler();

		const courses = await prisma.enrollment.findMany({
			where: {
				userId,
				status: EnrollmentStatus.Active
			},
			select: {
				Course: {
					select: {
						id: true,
						title: true,
						smallDescription: true,
						price: true,
						imageUrl: true,
						slug: true,
						status: true,
						level: true,
						duration: true,
						category: true
					}
				}
			}
		});
		return (
			courses?.reduce<TGetPublicCourse[]>((acc, item) => {
				if (item.Course) acc.push(item.Course);
				return acc;
			}, []) || []
		);
	} catch (error) {
		console.log("[Get enrolled courses error]", error);
		return [];
	}
}
