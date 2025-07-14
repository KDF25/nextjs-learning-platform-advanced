"use server";

import { EnrollmentStatus } from "@prisma/client";
import { headers } from "next/headers";

import { prisma } from "@/shared/database";

import { auth } from "@/entities/auth";

export const checkCourseBought = async (courseId: string): Promise<boolean> => {
	const session = await auth.api.getSession({ headers: await headers() });
	const userId = session?.user?.id;

	if (!userId) {
		return false;
	}

	const enrollment = await prisma.enrollment.findUnique({
		where: {
			userId_courseId: {
				userId,
				courseId
			}
		},
		select: {
			id: true,
			status: true
		}
	});

	return enrollment?.status === EnrollmentStatus.Active ? true : false;
};
