import { EnrollmentStatus } from "@prisma/client";
import { notFound } from "next/navigation";

import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";

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

		const enrolled = await prisma.enrollment.findUnique({
			where: {
				userId_courseId: {
					userId,
					courseId: course.id
				}
			},
			select: {
				status: true
			}
		});

		if (!enrolled || enrolled?.status !== EnrollmentStatus.Active) {
			return notFound();
		}

		return course;
	} catch (error) {
		console.log("[Get course sidebar data error]", error);
		return null;
	}
};
