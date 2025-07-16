import { EnrollmentStatus } from "@prisma/client";
import { notFound } from "next/navigation";

import { prisma } from "@/shared/database";

export const enrolledHandler = async (courseId: string, userId: string) => {
	const enrolled = await prisma.enrollment.findUnique({
		where: {
			userId_courseId: {
				userId,
				courseId
			}
		},
		select: {
			status: true
		}
	});

	if (!enrolled || enrolled?.status !== EnrollmentStatus.Active) {
		return notFound();
	}
};
