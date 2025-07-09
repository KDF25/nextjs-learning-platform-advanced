"use client";

import {
	DndContext,
	DragEndEvent,
	KeyboardSensor,
	PointerSensor,
	rectIntersection,
	useSensor,
	useSensors
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useTranslations } from "next-intl";
import { FC, useEffect, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";

import { GetFullCourse } from "@/entities/course";

import { ISortableChapterProps } from "../model";
import { useCourseStructure } from "../model/hooks";

import { ChapterItems } from "./chapter-items";
import { ENUM_SORTABLE_ITEM_TYPE } from "./sortable-item";

interface IStructureProps {
	course: GetFullCourse;
}

export interface IData {
	type: ENUM_SORTABLE_ITEM_TYPE;
}

export const Structure: FC<IStructureProps> = ({ course }) => {
	const t = useTranslations("EditCoursePage.courseStructure.chapters");
	const initialItems: ISortableChapterProps[] =
		course?.chapters?.map((chapter) => ({
			id: chapter?.id,
			title: chapter?.title,
			order: chapter?.position,
			isOpen: true,
			lessons: chapter?.lessons?.map((lesson) => ({
				id: lesson?.id,
				title: lesson?.title,
				order: lesson?.position
			}))
		})) || [];

	const [items, setItems] = useState<ISortableChapterProps[]>(initialItems);

	useEffect(() => {
		setItems((prev) => {
			const updatedItems =
				course?.chapters?.map((chapter) => ({
					id: chapter?.id,
					title: chapter?.title,
					order: chapter?.position,
					isOpen:
						prev.find((item) => item.id === chapter?.id)?.isOpen ||
						true,
					lessons: chapter?.lessons?.map((lesson) => ({
						id: lesson?.id,
						title: lesson?.title,
						order: lesson?.position
					}))
				})) || [];
			return updatedItems;
		});
	}, [course]);

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates
		})
	);

	const { dragEnd } = useCourseStructure(course?.id);

	const handleDragEnd = (event: DragEndEvent) => {
		dragEnd(event, items, setItems);
	};

	const toggleChapter = (chapterId: string) => {
		setItems((items) => {
			return items.map((item) => {
				if (item.id === chapterId) {
					return {
						...item,
						isOpen: !item.isOpen
					};
				}
				return item;
			});
		});
	};

	return (
		<DndContext
			collisionDetection={rectIntersection}
			sensors={sensors}
			onDragEnd={handleDragEnd}
		>
			<Card>
				<CardHeader className="flex flex-roe items-center justify-between border-b border-border">
					<CardTitle>{t("title")}</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					<ChapterItems
						courseId={course?.id}
						chapters={items}
						onOpenChange={toggleChapter}
					/>
				</CardContent>
			</Card>
		</DndContext>
	);
};
