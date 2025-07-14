"use server";

import { revalidatePath } from "next/cache";

import { ENUM_PATHS } from "@/shared/config";
import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";
import { ownerHandler } from "@/entities/course";

import { ENUM_REORDER_CHAPTER_ERRORS } from "../config";
import { IActionResponse } from "../types";

export async function ReorderChapters(
	courseId: string,
	chapter: { id: string; position: number }[]
): Promise<IActionResponse> {
	try {
		const { userId } = await authHandler();
		ownerHandler(courseId, userId);

		if (chapter.length === 0 || !chapter) {
			return {
				success: false,
				message: ENUM_REORDER_CHAPTER_ERRORS.ZERO_LENGTH
			};
		}

		const updates = chapter.map((chapter) =>
			prisma.chapter.update({
				where: {
					id: chapter.id,
					courseId
				},
				data: {
					position: chapter.position
				}
			})
		);

		await prisma.$transaction(updates);

		revalidatePath(ENUM_PATHS.ADMIN.EDIT(courseId));

		return {
			success: true,
			message: ENUM_REORDER_CHAPTER_ERRORS.SUCCESS
		};
	} catch (error) {
		console.error("[Reorder chapters error]", error);

		return {
			success: false,
			message: ENUM_REORDER_CHAPTER_ERRORS.FAILED
		};
	}
}
