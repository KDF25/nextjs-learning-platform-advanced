"use client";

import { useTransition } from "react";

import { CreateChapter } from "../actions";
import { ChapterSchemaType, IActionResponse } from "../types";

export const useChapterCreate = () => {
	const [isPending, startTransition] = useTransition();

	const createChapter = (
		data: ChapterSchemaType
	): Promise<IActionResponse> => {
		return new Promise((resolve, reject) => {
			startTransition(() => {
				CreateChapter(data).then(resolve).catch(reject);
			});
		});
	};

	return {
		isPending,
		createChapter
	};
};
