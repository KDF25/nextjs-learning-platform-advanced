"use server";

import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";

import { ENUM_CRUD_COURSE_ERRORS } from "../config";
import { courseSchema } from "../helpers";
import { CourseSchemaType, IActionResponse } from "../types";

export async function CreateCourse(
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

		const slug = await prisma.course.findUnique({
			where: {
				slug: validation.data.slug
			}
		});

		if (slug) {
			return {
				success: false,
				message: ENUM_CRUD_COURSE_ERRORS.DUPLICATE_SLUG
			};
		}

		await prisma.course.create({
			data: {
				...validation.data,
				userId
			}
		});

		return {
			success: true,
			message: ENUM_CRUD_COURSE_ERRORS.CREATE
		};
	} catch (error) {
		console.error("[Create course error]", error);

		return {
			success: false,
			message: ENUM_CRUD_COURSE_ERRORS.FAILED
		};
	}
}
