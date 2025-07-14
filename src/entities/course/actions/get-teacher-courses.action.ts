"use server";

import { Course } from "@prisma/client";

import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";

export async function GetAllTeacherCourses(): Promise<Course[]> {
	try {
		const { userId } = await authHandler();
		const courses = await prisma.course.findMany({
			where: {
				userId
			},
			orderBy: {
				createdAt: "desc"
			}
		});
		return courses;
	} catch (error) {
		console.log("[Get all teacher courses error]", error);
		return [];
	}
}
