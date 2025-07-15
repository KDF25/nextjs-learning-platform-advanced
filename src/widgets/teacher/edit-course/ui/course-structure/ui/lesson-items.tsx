"use client";

import {
	SortableContext,
	verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { FileTextIcon, GripVertical } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";
import { Button } from "@/shared/ui";

import { DeleteLesson } from "@/features/delete-lesson";

import { ISortableLessonProps } from "../model";

import { ENUM_SORTABLE_ITEM_TYPE, SortableItem } from "./sortable-item";

interface ILessonItemsProps {
	courseId: string;
	chapterId: string;
	lessons: ISortableLessonProps[];
}

export const LessonItems: FC<ILessonItemsProps> = ({
	courseId,
	chapterId,
	lessons
}) => {
	return (
		<SortableContext
			items={lessons?.map((lesson) => lesson?.id)}
			strategy={verticalListSortingStrategy}
		>
			{lessons?.map((lesson) => (
				<SortableItem
					key={lesson?.id}
					id={lesson?.id}
					data={{
						type: ENUM_SORTABLE_ITEM_TYPE.LESSON,
						chapterId: chapterId
					}}
				>
					{(listenersLesson) => (
						<div className="flex items-center justify-between p-2 hover:bg-accent rounded-md">
							<div className="flex items-center gap-2">
								<Button
									size={"icon"}
									variant={"ghost"}
									{...listenersLesson}
								>
									<GripVertical size={16} />
								</Button>
								<FileTextIcon size={16} />
								<Link
									href={ENUM_PATHS.TEACHER.LESSON(
										courseId,
										chapterId,
										lesson?.id
									)}
								>
									{lesson?.title}
								</Link>
							</div>
							<DeleteLesson
								courseId={courseId}
								chapterId={chapterId}
								lessonId={lesson?.id}
							/>
						</div>
					)}
				</SortableItem>
			))}
		</SortableContext>
	);
};
