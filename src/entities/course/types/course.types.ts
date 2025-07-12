import { Chapter, Course, Lesson } from "@prisma/client";
import z from "zod";

import { courseSchema } from "../helpers";

export type CourseSchemaType = z.infer<typeof courseSchema>;

export type GetFullCourse = Course & {
	chapters: (Pick<Chapter, "id" | "title" | "position"> & {
		lessons: Pick<Lesson, "id" | "title" | "position">[];
	})[];
};

export type GetCourse = Omit<
	Course,
	"userId" | "status" | "createdAt" | "updatedAt" | "description" | "imageKey"
>;
