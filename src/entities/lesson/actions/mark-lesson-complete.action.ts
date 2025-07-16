"use server";

import { revalidatePath } from "next/cache";

import { ENUM_PATHS } from "@/shared/config";
import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";
import { enrolledHandler } from "@/entities/course";

import { ENUM_CRUD_LESSON_ERRORS } from "../config";
import { IActionResponse } from "../types";

export async function MarkLessonComplete(data: {
	slug: string;
	lessonId: string;
	completed: boolean;
}): Promise<IActionResponse> {
	try {
		const { userId } = await authHandler();

		const lesson = await prisma.lesson.findUnique({
			where: {
				id: data?.lessonId
			},
			select: {
				id: true,
				Chapter: {
					select: {
						courseId: true
					}
				}
			}
		});

		if (!lesson || !lesson?.Chapter?.courseId) {
			return {
				success: false,
				message: ENUM_CRUD_LESSON_ERRORS.NOT_FOUND
			};
		}

		await enrolledHandler(lesson?.Chapter?.courseId, userId);

		await prisma.lessonProgress.upsert({
			where: {
				userId_lessonId: {
					userId,
					lessonId: data?.lessonId
				}
			},
			update: {
				completed: data?.completed
			},
			create: {
				userId,
				lessonId: data?.lessonId,
				completed: true
			}
		});

		revalidatePath(ENUM_PATHS.DASHBOARD.LESSON(data?.slug, data?.lessonId));

		return {
			success: true,
			message: ENUM_CRUD_LESSON_ERRORS.MARK_COMPLETE
		};
	} catch (error) {
		console.error("[Mark lesson complete error]", error);

		return {
			success: false,
			message: ENUM_CRUD_LESSON_ERRORS.FAILED
		};
	}
}
