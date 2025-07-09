"use client";

import { useTransition } from "react";

import { DeleteLesson } from "../actions";
import { IActionResponse } from "../types";

export const useLessonDelete = () => {
	const [isPending, startTransition] = useTransition();

	const deleteLesson = (data: {
		courseId: string;
		chapterId: string;
		lessonId: string;
	}): Promise<IActionResponse> => {
		return new Promise((resolve, reject) => {
			startTransition(() => {
				DeleteLesson(data).then(resolve).catch(reject);
			});
		});
	};

	return {
		isPending,
		deleteLesson
	};
};
