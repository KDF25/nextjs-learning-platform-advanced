import { notFound } from "next/navigation";

import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";

import { enrolledHandler } from "./enrolled.handler";

export const GetCourseSidebarData = async (slug: string) => {
	try {
		const { userId } = await authHandler();

		const course = await prisma.course.findUnique({
			where: {
				slug
			},
			select: {
				id: true,
				title: true,
				imageUrl: true,
				duration: true,
				level: true,
				category: true,
				slug: true,
				chapters: {
					select: {
						id: true,
						title: true,
						position: true,
						lessons: {
							select: {
								id: true,
								title: true,
								description: true,
								position: true,
								lessonProgress: {
									where: {
										userId
									},
									select: {
										completed: true,
										lessonId: true
									}
								}
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

		await enrolledHandler(course.id, userId);

		return course;
	} catch (error) {
		console.log("[Get course sidebar data error]", error);
		return null;
	}
};
