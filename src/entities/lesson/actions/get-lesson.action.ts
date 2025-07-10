"use server";

import { Lesson } from "@prisma/client";
import { notFound } from "next/navigation";

import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";
import { ownerHandler } from "@/entities/course";

export async function getLesson(data: {
	courseId: string;
	chapterId: string;
	lessonId: string;
}): Promise<Lesson> {
	const userId = await authHandler();
	ownerHandler(data?.courseId, userId);

	const lesson = await prisma.lesson.findUnique({
		where: {
			id: data?.lessonId,
			chapterId: data?.chapterId
		}
	});

	if (!lesson) {
		return notFound();
	}

	return lesson;
}
