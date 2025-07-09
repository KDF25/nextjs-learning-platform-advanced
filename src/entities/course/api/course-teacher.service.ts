import { Course } from "@prisma/client";

import { prisma } from "@/shared/database";

import { GetFullCourse } from "../types";

export const CourseTeacherService = {
	async getAll(userId: string): Promise<Course[]> {
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
	},

	async getById(
		courseId: string,
		userId: string
	): Promise<GetFullCourse | null> {
		try {
			const course = await prisma.course.findFirst({
				where: {
					id: courseId,
					userId
				},
				include: {
					chapters: {
						select: {
							id: true,
							title: true,
							position: true,
							lessons: {
								select: {
									id: true,
									title: true,
									position: true
								},
								orderBy: {
									position: "asc"
								}
							}
						}
					}
				}
			});
			return course;
		} catch (error) {
			console.log("[Get teacher course by id error]", error);
			return null;
		}
	}
};
