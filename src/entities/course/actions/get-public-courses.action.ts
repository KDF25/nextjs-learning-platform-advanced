"use server";

import { prisma } from "@/shared/database";

export async function GetPublicCourses() {
	try {
		const courses = await prisma.course.findMany({
			where: {
				status: "Published"
			},
			select: {
				id: true,
				title: true,
				smallDescription: true,
				price: true,
				imageUrl: true,
				slug: true,
				status: true,
				level: true,
				duration: true,
				category: true
			},
			orderBy: {
				createdAt: "desc"
			}
		});

		return courses;
	} catch (error) {
		console.log("[Get public courses error]", error);
		return [];
	}
}
