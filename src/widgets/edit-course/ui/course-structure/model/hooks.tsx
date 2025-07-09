"use client";

import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

import {
	ENUM_REORDER_COURSE_ERRORS,
	ReorderChapters,
	ReorderLessons
} from "@/entities/course";

import { ISortableChapterProps } from "../model";
import { ENUM_SORTABLE_ITEM_TYPE } from "../ui";

export const useCourseStructure = (courseId: string | null | undefined) => {
	const t = useTranslations("DnDkit");

	const dragEnd = (
		event: DragEndEvent,
		items: ISortableChapterProps[],
		setItems: (items: ISortableChapterProps[]) => void
	) => {
		const { active, over } = event;

		if (active.id === over?.id || !over) {
			return;
		}

		const activeId = active?.id;
		const overId = over?.id;
		const activeType = active?.data.current?.type;
		const overType = over?.data.current?.type;

		if (activeType === ENUM_SORTABLE_ITEM_TYPE.CHAPTER) {
			let targetChapterId = null;

			if (overType === ENUM_SORTABLE_ITEM_TYPE.CHAPTER) {
				targetChapterId = overId;
			}

			if (overType === ENUM_SORTABLE_ITEM_TYPE.LESSON) {
				targetChapterId = over?.data.current?.chapterId || null;
			}

			if (!targetChapterId) {
				return;
			}

			const oldIndex = items.findIndex((item) => item.id === active?.id);
			const newIndex = items.findIndex(
				(item) => item.id === targetChapterId
			);

			if (oldIndex === -1 || newIndex === -1) {
				toast.error(t("toast.error.notFound"));
				return;
			}

			const reorderedLocalItems = arrayMove(items, oldIndex, newIndex);

			const updatedItems = reorderedLocalItems.map((item, index) => ({
				...item,
				order: index + 1
			}));

			const prevItems = [...items];

			setItems(updatedItems);

			if (courseId) {
				const chaptersToUpdate = updatedItems.map((item) => ({
					id: item.id,
					position: item.order
				}));

				const reorderPromise = () =>
					ReorderChapters(courseId, chaptersToUpdate);

				toast.promise(reorderPromise(), {
					loading: t("toast.action.chapters.loading"),
					success: (result) => {
						if (result?.success) {
							return t("toast.action.chapters.success");
						}

						let message = "";
						switch (result?.message) {
							case ENUM_REORDER_COURSE_ERRORS.ZERO_LENGTH:
								message = t("toast.action.chapters.zeroLength");
								break;
							case ENUM_REORDER_COURSE_ERRORS.FAILED:
								message = t("toast.action.chapters.error");
								break;
							default:
								message = t("toast.action.chapters.error");
								break;
						}
						return message;
					},
					error: () => {
						setItems(prevItems);
						return t("toast.action.chapters.error");
					}
				});
			}
		} else if (
			activeType === ENUM_SORTABLE_ITEM_TYPE.LESSON &&
			overType === ENUM_SORTABLE_ITEM_TYPE.LESSON
		) {
			const chapterId = active?.data.current?.chapterId;
			const overChapterId = over?.data.current?.chapterId;

			if (!chapterId || chapterId !== overChapterId || !overChapterId) {
				toast.error(t("toast.error.moveLesson"));
				return;
			}

			const chapterIndex = items.findIndex(
				(item) => item.id === chapterId
			);

			if (chapterIndex === -1) {
				toast.error(t("toast.error.notFound"));
				return;
			}

			const chapterToUpdate = items[chapterIndex];

			const oldLessonIndex = chapterToUpdate?.lessons?.findIndex(
				(lesson) => lesson.id === activeId
			);

			const newLessonIndex = chapterToUpdate?.lessons?.findIndex(
				(lesson) => lesson.id === overId
			);

			if (oldLessonIndex === -1 || newLessonIndex === -1) {
				toast.error(t("toast.error.notFound"));
				return;
			}

			const reorderedLessons = arrayMove(
				chapterToUpdate?.lessons,
				oldLessonIndex,
				newLessonIndex
			);

			const updatedLessons = reorderedLessons.map((lesson, index) => ({
				...lesson,
				order: index + 1
			}));

			const newItems = [...items];

			newItems[chapterIndex] = {
				...chapterToUpdate,
				lessons: updatedLessons
			};
			const prevItems = [...items];
			setItems(newItems);

			if (courseId) {
				const lessonsToUpdate = updatedLessons.map((lesson) => ({
					id: lesson.id,
					position: lesson.order
				}));

				const reorderLessonsPromise = () =>
					ReorderLessons(courseId, chapterId, lessonsToUpdate);

				toast.promise(reorderLessonsPromise(), {
					loading: t("toast.action.lessons.loading"),
					success: (result) => {
						if (result?.success) {
							return t("toast.action.lessons.success");
						}

						let message = "";
						switch (result?.message) {
							case ENUM_REORDER_COURSE_ERRORS.ZERO_LENGTH:
								message = t("toast.action.lessons.zeroLength");
								break;
							case ENUM_REORDER_COURSE_ERRORS.FAILED:
								message = t("toast.action.lessons.error");
								break;
							default:
								message = t("toast.action.lessons.error");
								break;
						}
						return message;
					},
					error: () => {
						setItems(prevItems);
						return t("toast.action.lessons.error");
					}
				});
			}
		}
	};

	return { dragEnd };
};
