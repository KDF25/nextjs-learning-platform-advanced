"use server";

import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";

import { ENUM_CRUD_COURSE_ERRORS } from "../config";
import { courseSchema } from "../helpers";
import { CourseSchemaType, IActionResponse } from "../types";

export async function EditCourse(
	data: CourseSchemaType
): Promise<IActionResponse> {
	try {
		const userId = await authHandler();
		const validation = courseSchema.safeParse(data);

		if (!validation.success) {
			return {
				success: false,
				message: ENUM_CRUD_COURSE_ERRORS.INVALID_FORM_DATA
			};
		}

		const course = await prisma.course.findUnique({
			where: {
				slug: data.slug,
				userId
			}
		});

		if (!course) {
			return {
				success: false,
				message: ENUM_CRUD_COURSE_ERRORS.NOT_FOUND
			};
		}

		await prisma.course.update({
			where: {
				id: course.id
			},
			data: {
				...validation.data
			}
		});

		return {
			success: true,
			message: ENUM_CRUD_COURSE_ERRORS.CREATE
		};
	} catch (error) {
		console.error("[Edit course error]", error);

		return {
			success: false,
			message: ENUM_CRUD_COURSE_ERRORS.FAILED
		};
	}
}
