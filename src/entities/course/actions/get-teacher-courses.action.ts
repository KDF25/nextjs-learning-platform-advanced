"use server";

import { Course } from "@prisma/client";

import { prisma } from "@/shared/database";

import { authHandler } from "@/entities/auth";

export async function GetAllTeacherCourses(count?: number): Promise<Course[]> {
	try {
		const { userId } = await authHandler();

		if (count) {
			return prisma.course.findMany({
				where: {
					userId
				},
				orderBy: {
					createdAt: "desc"
				},
				take: count
			});
		} else {
			return await prisma.course.findMany({
				where: {
					userId
				},
				orderBy: {
					createdAt: "desc"
				}
			});
		}
	} catch (error) {
		console.log("[Get all teacher courses error]", error);
		return [];
	}
}
