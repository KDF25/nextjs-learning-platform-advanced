import { Chapter, Course, Lesson } from "@prisma/client";
import z from "zod";

import { courseSchema } from "../helpers";

export type CourseSchemaType = z.infer<typeof courseSchema>;

export type TGetFullCourse = Course & {
	chapters: (Pick<Chapter, "id" | "title" | "position"> & {
		lessons: Pick<Lesson, "id" | "title" | "position">[];
	})[];
};

export type TGetPublicCourse = Omit<
	Course,
	"userId" | "status" | "createdAt" | "updatedAt" | "description" | "imageKey"
>;

export type TGetPublicCourseBySlug = Omit<
	Course,
	"userId" | "status" | "createdAt" | "updatedAt" | "imageKey"
> & {
	chapters: (Pick<Chapter, "id" | "title" | "position"> & {
		lessons: Pick<Lesson, "id" | "title" | "position">[];
	})[];
};
