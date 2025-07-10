"use server";

import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";

import { ENUM_CRUD_COURSE_ERRORS } from "../config";
import { IActionResponse } from "../types";

import { ownerHandler } from "./owner.handler";

export async function DeleteCourse(data: {
	courseId: string;
}): Promise<IActionResponse> {
	try {
		const userId = await authHandler();

		ownerHandler(data?.courseId, userId);

		await prisma.course.delete({
			where: {
				id: data?.courseId,
				userId
			}
		});

		return {
			success: true,
			message: ENUM_CRUD_COURSE_ERRORS.DELETE
		};
	} catch (error) {
		console.error("[Delete course error]", error);

		return {
			success: false,
			message: ENUM_CRUD_COURSE_ERRORS.FAILED
		};
	}
}
