"use server";

import { revalidatePath } from "next/cache";

import { ENUM_PATHS } from "@/shared/config";
import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";
import { ownerHandler } from "@/entities/course";

import { ENUM_CRUD_LESSON_ERRORS } from "../config";
import { lessonSchema } from "../helpers";
import { IActionResponse, LessonSchemaType } from "../types";

export async function EditLesson(
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

		const lesson = await prisma?.lesson?.findUnique({
			where: {
				id: data?.lessonId,
				chapterId: data?.chapterId
			}
		});

		if (!lesson) {
			return {
				success: false,
				message: ENUM_CRUD_LESSON_ERRORS.NOT_FOUND
			};
		}

		await prisma.lesson.update({
			where: {
				id: data?.lessonId,
				chapterId: data?.chapterId
			},
			data: {
				title: data?.title,
				description: data?.description,
				imageUrl: data?.imageUrl,
				imageKey: data?.imageKey,
				videoUrl: data?.videoUrl,
				videoKey: data?.videoKey
			}
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
