"use server";

import { revalidatePath } from "next/cache";

import { ENUM_PATHS } from "@/shared/config";
import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";
import { ownerHandler } from "@/entities/course";

import { ENUM_CRUD_CHAPTER_ERRORS } from "../config";
import { chapterSchema } from "../helpers";
import { ChapterSchemaType, IActionResponse } from "../types";

export async function CreateChapter(
	data: ChapterSchemaType
): Promise<IActionResponse> {
	try {
		const userId = await authHandler();
		const validation = chapterSchema.safeParse(data);

		if (!validation.success) {
			return {
				success: false,
				message: ENUM_CRUD_CHAPTER_ERRORS.INVALID_FORM_DATA
			};
		}

		ownerHandler(data?.courseId, userId);

		await prisma.$transaction(async (tx) => {
			const maxPos = await tx.chapter.findFirst({
				where: {
					courseId: data?.courseId
				},
				select: {
					position: true
				},
				orderBy: {
					position: "desc"
				}
			});

			await tx.chapter.create({
				data: {
					title: data?.name,
					courseId: data?.courseId,
					position: maxPos?.position ? maxPos?.position + 1 : 0
				}
			});
		});

		revalidatePath(ENUM_PATHS.ADMIN.EDIT(data?.courseId));

		return {
			success: true,
			message: ENUM_CRUD_CHAPTER_ERRORS.CREATE
		};
	} catch (error) {
		console.error("[Create chapter error]", error);

		return {
			success: false,
			message: ENUM_CRUD_CHAPTER_ERRORS.FAILED
		};
	}
}
