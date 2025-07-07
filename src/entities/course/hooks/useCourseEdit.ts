"use client";

import { useTransition } from "react";

import { CreateCourse } from "../actions";
import { CourseSchemaType } from "../types";

export const useCourseCreate = () => {
	const [isPending, startTransition] = useTransition();

	const createCourse = (
		data: CourseSchemaType
	): Promise<{ success: boolean; message: string }> => {
		return new Promise((resolve, reject) => {
			startTransition(() => {
				CreateCourse(data).then(resolve).catch(reject);
			});
		});
	};

	return {
		isPending,
		createCourse
	};
};
