"use server";

import { headers } from "next/headers";

import { prisma } from "@/shared/database";

import { auth } from "@/entities/auth";

import { ENUM_CREATE_COURSE_ERRORS } from "../config";
import { courseSchema } from "../helpers";
import { CourseSchemaType } from "../types";

export async function CreateCourse(data: CourseSchemaType) {
	try {
		const session = await auth.api.getSession({ headers: await headers() });
		const validation = courseSchema.safeParse(data);

		if (!validation.success) {
			return {
				success: false,
				message: ENUM_CREATE_COURSE_ERRORS.INVALID_FORM_DATA
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
				message: ENUM_CREATE_COURSE_ERRORS.DUPLICATE_SLUG
			};
		}

		await prisma.course.create({
			data: {
				...validation.data,
				userId: session?.user?.id
			}
		});

		return {
			success: true,
			message: ENUM_CREATE_COURSE_ERRORS.SUCCESS
		};
	} catch (error) {
		console.error(error);

		return {
			success: false,
			message: ENUM_CREATE_COURSE_ERRORS.FAILED
		};
	}
}
