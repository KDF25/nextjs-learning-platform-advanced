"use server";

import { prisma } from "@/shared/database";

export const StatsDashboard = async () => {
	const [signUps, customers, courses, lessons] = await Promise.all([
		prisma.user.count(),

		prisma.user.count({
			where: {
				enrollment: {
					some: {}
				}
			}
		}),

		prisma.course.count(),

		prisma.lesson.count()
	]);

	return {
		signUps,
		customers,
		courses,
		lessons
	};
};
