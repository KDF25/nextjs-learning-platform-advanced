import { Chapter, Course, Lesson } from "@prisma/client";
import z from "zod";

import {
	GetCourseLesson,
	GetCourseSidebarData,
	GetEnrolledCourses,
	GetPublicCourseBySlug,
	GetPublicCourses
} from "../actions";
import { courseSchema } from "../helpers";

export type CourseSchemaType = z.infer<typeof courseSchema>;

export type TGetFullCourse = Course & {
	chapters: (Pick<Chapter, "id" | "title" | "position"> & {
		lessons: Pick<Lesson, "id" | "title" | "position">[];
	})[];
};

export type TGetPublicCourse = Awaited<
	ReturnType<typeof GetPublicCourses>
>[number];

export type TGetEnrolledCourse = Awaited<
	ReturnType<typeof GetEnrolledCourses>
>[number];

export type TGetPublicCourseBySlug = Awaited<
	ReturnType<typeof GetPublicCourseBySlug>
>;

export type TGetCourseSidebarType = Awaited<
	ReturnType<typeof GetCourseSidebarData>
>;

export type TGetCourseLesson = Awaited<ReturnType<typeof GetCourseLesson>>;
