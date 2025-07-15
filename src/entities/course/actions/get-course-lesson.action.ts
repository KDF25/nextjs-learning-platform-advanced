import { EnrollmentStatus } from "@prisma/client";
import { notFound } from "next/navigation";

import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";

export const GetCourseLesson = async (id: string) => {
	try {
		const { userId } = await authHandler();
		const lesson = await prisma.lesson.findUnique({
			where: {
				id
			},
			select: {
				id: true,
				title: true,
				description: true,
				position: true,
				imageUrl: true,
				videoUrl: true,
				Chapter: {
					select: {
						courseId: true
					}
				}
			}
		});

		if (!lesson || !lesson?.Chapter?.courseId) {
			return notFound();
		}

		const enrolled = await prisma.enrollment.findUnique({
			where: {
				userId_courseId: {
					userId,
					courseId: lesson?.Chapter?.courseId
				}
			},
			select: {
				status: true
			}
		});

		if (!enrolled || enrolled?.status !== EnrollmentStatus.Active) {
			return notFound();
		}

		return lesson;
	} catch (error) {
		console.log("[Get course lesson error]", error);
		return null;
	}
};
