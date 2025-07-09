"use client";

import { useTransition } from "react";

import { DeleteChapter } from "../actions";
import { IActionResponse } from "../types";

export const useChapterDelete = () => {
	const [isPending, startTransition] = useTransition();

	const deleteChapter = (data: {
		courseId: string;
		chapterId: string;
	}): Promise<IActionResponse> => {
		return new Promise((resolve, reject) => {
			startTransition(() => {
				DeleteChapter(data).then(resolve).catch(reject);
			});
		});
	};

	return {
		isPending,
		deleteChapter
	};
};
