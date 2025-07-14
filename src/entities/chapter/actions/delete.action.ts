"use server";

import { revalidatePath } from "next/cache";

import { ENUM_PATHS } from "@/shared/config";
import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";
import { ownerHandler } from "@/entities/course";

import { ENUM_CRUD_CHAPTER_ERRORS } from "../config";
import { IActionResponse } from "../types";

export async function DeleteChapter(data: {
	courseId: string;
	chapterId: string;
}): Promise<IActionResponse> {
	try {
		const { userId } = await authHandler();

		if (!data?.courseId || !data?.chapterId) {
			return {
				success: false,
				message: ENUM_CRUD_CHAPTER_ERRORS.INVALID_FORM_DATA
			};
		}

		ownerHandler(data?.courseId, userId);

		const courseWithChapters = await prisma.course.findUnique({
			where: {
				id: data?.courseId
			},
			include: {
				chapters: {
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

		if (!courseWithChapters) {
			return {
				success: false,
				message: ENUM_CRUD_CHAPTER_ERRORS.NOT_FOUND
			};
		}

		const chapterToDelete = courseWithChapters?.chapters.find(
			(chapter) => chapter.id === data?.chapterId
		);

		if (!chapterToDelete) {
			return {
				success: false,
				message: ENUM_CRUD_CHAPTER_ERRORS.NOT_FOUND
			};
		}

		const remainderChapters =
			courseWithChapters?.chapters.filter(
				(chapter) => chapter.id !== data?.chapterId
			) || [];

		const updates = remainderChapters?.map((chapter, index) =>
			prisma.chapter.update({
				where: {
					id: chapter.id
				},
				data: {
					position: index + 1
				}
			})
		);

		await prisma.$transaction([
			...updates,
			prisma.chapter.delete({
				where: {
					id: data?.chapterId,
					courseId: data?.courseId
				}
			})
		]);

		revalidatePath(ENUM_PATHS.ADMIN.EDIT(data?.courseId));

		return {
			success: true,
			message: ENUM_CRUD_CHAPTER_ERRORS.DELETE
		};
	} catch (error) {
		console.error("[Delete chapter error]", error);

		return {
			success: false,
			message: ENUM_CRUD_CHAPTER_ERRORS.FAILED
		};
	}
}
