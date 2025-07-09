"use client";

import { useTransition } from "react";

import { CreateCourse } from "../actions";
import { CourseSchemaType, IActionResponse } from "../types";

export const useCourseCreate = () => {
	const [isPending, startTransition] = useTransition();

	const createCourse = (data: CourseSchemaType): Promise<IActionResponse> => {
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
