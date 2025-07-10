"use client";

import { useTransition } from "react";

import { EditLesson } from "../actions";
import { IActionResponse, LessonSchemaType } from "../types";

export const useLessonEdit = () => {
	const [isPending, startTransition] = useTransition();

	const editLesson = (data: LessonSchemaType): Promise<IActionResponse> => {
		return new Promise((resolve, reject) => {
			startTransition(() => {
				EditLesson(data).then(resolve).catch(reject);
			});
		});
	};

	return {
		isPending,
		editLesson
	};
};
