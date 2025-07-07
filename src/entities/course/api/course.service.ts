import { Course } from "@prisma/client";

import { prisma } from "@/shared/database";

export const CourseService = {
	async getTeacherCourses(userId: string): Promise<Course[]> {
		try {
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
};
