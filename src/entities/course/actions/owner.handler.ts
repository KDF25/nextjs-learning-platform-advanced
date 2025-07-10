import { Course } from "@prisma/client";
import { NextResponse } from "next/server";

import { prisma } from "@/shared/database";

export const ownerHandler = async (
	courseId: string,
	userId: string
): Promise<Course> => {
	const course = await prisma.course.findUnique({
		where: { id: courseId, userId }
	});

	if (!course) {
		throw new NextResponse("Unauthorized", { status: 401 });
	}

	return course;
};
