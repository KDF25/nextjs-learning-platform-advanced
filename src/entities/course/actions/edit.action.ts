"use server";

import { headers } from "next/headers";

import { prisma } from "@/shared/database";

import { auth } from "@/entities/auth";

import { ENUM_CREATE_COURSE_ERRORS } from "../config";
import { courseSchema } from "../helpers";
import { CourseSchemaType } from "../types";

export async function EditCourse(data: CourseSchemaType) {
	try {
		const session = await auth.api.getSession({ headers: await headers() });
		const validation = courseSchema.safeParse(data);

		if (!validation.success) {
			return {
				success: false,
				message: ENUM_CREATE_COURSE_ERRORS.INVALID_FORM_DATA
			};
		}

		const course = await prisma.course.findUnique({
			where: {
				slug: data.slug,
				userId: session?.user?.id
			}
		});

		if (!course) {
			return {
				success: false,
				message: ENUM_CREATE_COURSE_ERRORS.NOT_FOUND
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
			message: ENUM_CREATE_COURSE_ERRORS.SUCCESS
		};
	} catch (error) {
		console.error("[Edit course error]", error);

		return {
			success: false,
			message: ENUM_CREATE_COURSE_ERRORS.FAILED
		};
	}
}
