"use server";

import { revalidatePath } from "next/cache";

import { ENUM_PATHS } from "@/shared/config";
import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";
import { ownerHandler } from "@/entities/course";

import { ENUM_CRUD_LESSON_ERRORS } from "../config";
import { IActionResponse } from "../types";

export async function DeleteLesson(data: {
	courseId: string;
	chapterId: string;
	lessonId: string;
}): Promise<IActionResponse> {
	try {
		const userId = await authHandler();

		if (!data?.courseId || !data?.chapterId || !data?.lessonId) {
			return {
				success: false,
				message: ENUM_CRUD_LESSON_ERRORS.INVALID_FORM_DATA
			};
		}

		const chapterWithLessons = await prisma.chapter.findUnique({
			where: {
				id: data?.chapterId
			},
			include: {
				lessons: {
					select: {
						id: true,
						position: true
					},
					orderBy: {
						position: "asc"
					}
				}
			}
		});

		if (!chapterWithLessons?.courseId) {
			return {
				success: false,
				message: ENUM_CRUD_LESSON_ERRORS.NOT_FOUND
			};
		}

		ownerHandler(data?.courseId, userId);

		const lessons = chapterWithLessons?.lessons;

		const lessonToDelete = lessons?.find(
			(lesson) => lesson?.id === data?.lessonId
		);

		if (!lessonToDelete) {
			return {
				success: false,
				message: ENUM_CRUD_LESSON_ERRORS.NOT_FOUND
			};
		}

		const remainderLessons =
			lessons?.filter((lesson) => lesson?.id !== data?.lessonId) || [];

		const updates = remainderLessons?.map((lesson, index) =>
			prisma.lesson.update({
				where: {
					id: lesson?.id
				},
				data: {
					position: index + 1
				}
			})
		);

		await prisma.$transaction([
			...updates,
			prisma.lesson.delete({
				where: {
					id: data?.lessonId,
					chapterId: data?.chapterId
				}
			})
		]);

		revalidatePath(ENUM_PATHS.ADMIN.EDIT(data?.courseId));

		return {
			success: true,
			message: ENUM_CRUD_LESSON_ERRORS.DELETE
		};
	} catch (error) {
		console.error("[Delete chapter error]", error);

		return {
			success: false,
			message: ENUM_CRUD_LESSON_ERRORS.FAILED
		};
	}
}
