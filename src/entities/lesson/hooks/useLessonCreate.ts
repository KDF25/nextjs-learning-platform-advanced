"use client";

import { useTransition } from "react";

import { CreateLesson } from "../actions";
import { IActionResponse, LessonSchemaType } from "../types";

export const useLessonCreate = () => {
	const [isPending, startTransition] = useTransition();

	const createLesson = (data: LessonSchemaType): Promise<IActionResponse> => {
		return new Promise((resolve, reject) => {
			startTransition(() => {
				CreateLesson(data).then(resolve).catch(reject);
			});
		});
	};

	return {
		isPending,
		createLesson
	};
};
