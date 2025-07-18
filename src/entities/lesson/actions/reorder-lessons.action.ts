"use server";

import { revalidatePath } from "next/cache";

import { ENUM_PATHS } from "@/shared/config";
import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";
import { ownerHandler } from "@/entities/course";

import { ENUM_REORDER_LESSON_ERRORS } from "../config";
import { IActionResponse } from "../types";

export async function ReorderLessons(
	courseId: string,
	chapterId: string,
	lessons: { id: string; position: number }[]
): Promise<IActionResponse> {
	try {
		const { userId } = await authHandler();
		ownerHandler(courseId, userId);

		if (lessons.length === 0 || !lessons) {
			return {
				success: false,
				message: ENUM_REORDER_LESSON_ERRORS.ZERO_LENGTH
			};
		}

		const updates = lessons.map((lesson) =>
			prisma.lesson.update({
				where: {
					id: lesson.id,
					chapterId: chapterId
				},
				data: {
					position: lesson.position
				}
			})
		);

		await prisma.$transaction(updates);

		revalidatePath(ENUM_PATHS.TEACHER.EDIT(courseId));

		return {
			success: true,
			message: ENUM_REORDER_LESSON_ERRORS.SUCCESS
		};
	} catch (error) {
		console.error("[Reorder lessons error]", error);

		return {
			success: false,
			message: ENUM_REORDER_LESSON_ERRORS.FAILED
		};
	}
}
