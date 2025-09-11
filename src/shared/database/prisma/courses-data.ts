import { CourseLevel, CourseStatus, Prisma } from "@prisma/client";

import courses from "./courses-export.json";

export const COURSES = (userId: string): Prisma.CourseCreateInput[] => {
	return courses.map((course) => ({
		...course,
		user: { connect: { id: userId } },
		level: course.level as CourseLevel,
		status: course.status as CourseStatus,
		category: course.category,
		chapters: course.chapters
	}));
};
