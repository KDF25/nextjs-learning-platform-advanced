"use client";

import { useTransition } from "react";

import { MarkLessonComplete } from "../actions";
import { IActionResponse } from "../types";

export const useMarkLessonComplete = () => {
	const [isPending, startTransition] = useTransition();

	const mark = (data: {
		lessonId: string;
		slug: string;
		completed: boolean;
	}): Promise<IActionResponse> => {
		return new Promise((resolve, reject) => {
			startTransition(() => {
				MarkLessonComplete(data).then(resolve).catch(reject);
			});
		});
	};

	return {
		isPending,
		mark
	};
};
