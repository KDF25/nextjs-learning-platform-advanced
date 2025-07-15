"use server";

import { revalidatePath } from "next/cache";

import { ENUM_PATHS } from "@/shared/config";
import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";
import { ownerHandler } from "@/entities/course";

import { ENUM_CRUD_LESSON_ERRORS } from "../config";
import { lessonSchema } from "../helpers";
import { IActionResponse, LessonSchemaType } from "../types";

export async function CreateLesson(
	data: LessonSchemaType
): Promise<IActionResponse> {
	try {
		const { userId } = await authHandler();
		const validation = lessonSchema.safeParse(data);

		if (!validation.success) {
			return {
				success: false,
				message: ENUM_CRUD_LESSON_ERRORS.INVALID_FORM_DATA
			};
		}

		ownerHandler(data?.courseId, userId);

		await prisma.$transaction(async (tx) => {
			const maxPos = await tx.lesson.findFirst({
				where: {
					chapterId: data?.chapterId
				},
				select: {
					position: true
				},
				orderBy: {
					position: "desc"
				}
			});

			await tx.lesson.create({
				data: {
					position: maxPos?.position ? maxPos?.position + 1 : 0,
					title: data?.title,
					description: data?.description,
					imageUrl: data?.imageUrl,
					imageKey: data?.imageKey,
					videoUrl: data?.videoUrl,
					videoKey: data?.videoKey
				}
			});
		});

		revalidatePath(ENUM_PATHS.TEACHER.EDIT(data?.courseId));

		return {
			success: true,
			message: ENUM_CRUD_LESSON_ERRORS.CREATE
		};
	} catch (error) {
		console.error("[Create lesson error]", error);

		return {
			success: false,
			message: ENUM_CRUD_LESSON_ERRORS.FAILED
		};
	}
}
