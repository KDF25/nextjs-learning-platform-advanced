"use server";

import { EnrollmentStatus } from "@prisma/client";

import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";

export async function GetEnrolledCourses() {
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
										position: true,
										lessonProgress: {
											where: {
												userId
											},
											select: {
												lessonId: true,
												completed: true
											}
										}
									}
								}
							}
						}
					}
				}
			}
		});
		return (
			courses
				?.map((item) => item?.Course)
				?.filter((course) => !!course) || []
		);
	} catch (error) {
		console.log("[Get enrolled courses error]", error);
		return [];
	}
}
