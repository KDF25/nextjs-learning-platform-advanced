"use client";

import { useTransition } from "react";

import { EditCourse } from "../actions";
import { CourseSchemaType, IActionResponse } from "../types";

export const useCourseEdit = () => {
	const [isPending, startTransition] = useTransition();

	const editCourse = (data: CourseSchemaType): Promise<IActionResponse> => {
		return new Promise((resolve, reject) => {
			startTransition(() => {
				EditCourse(data).then(resolve).catch(reject);
			});
		});
	};

	return {
		isPending,
		editCourse
	};
};
