"use client";

import { useTransition } from "react";

import { EnrollCourse } from "../actions";
import { IActionResponse } from "../types";

export const useCourseEnroll = () => {
	const [isPending, startTransition] = useTransition();

	const enrollCourse = (
		courseId: string
	): Promise<IActionResponse | never> => {
		return new Promise((resolve, reject) => {
			startTransition(() => {
				EnrollCourse(courseId).then(resolve).catch(reject);
			});
		});
	};

	return {
		isPending,
		enrollCourse
	};
};
