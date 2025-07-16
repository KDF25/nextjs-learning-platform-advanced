import { notFound } from "next/navigation";

import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";

import { enrolledHandler } from "./enrolled.handler";

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
				},
				lessonProgress: {
					where: {
						userId,
						lessonId: id
					},
					select: {
						lessonId: true,
						completed: true
					}
				}
			}
		});

		if (!lesson || !lesson?.Chapter?.courseId) {
			return notFound();
		}

		await enrolledHandler(lesson?.Chapter?.courseId, userId);

		return lesson;
	} catch (error) {
		console.log("[Get course lesson error]", error);
		return null;
	}
};
