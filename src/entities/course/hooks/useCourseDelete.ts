"use client";

import { useTransition } from "react";

import { DeleteCourse } from "../actions";
import { IActionResponse } from "../types";

export const useCourseDelete = () => {
	const [isPending, startTransition] = useTransition();

	const deleteCourse = (data: {
		courseId: string;
	}): Promise<IActionResponse> => {
		return new Promise((resolve, reject) => {
			startTransition(() => {
				DeleteCourse(data).then(resolve).catch(reject);
			});
		});
	};

	return {
		isPending,
		deleteCourse
	};
};
