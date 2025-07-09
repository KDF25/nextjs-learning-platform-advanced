"use client";

import {
	SortableContext,
	verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { ChevronDown, ChevronRight, GripVertical, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";

import {
	Button,
	Card,
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from "@/shared/ui";

import { ISortableChapterProps } from "../model";

import { LessonItems } from "./lesson-items";
import { ENUM_SORTABLE_ITEM_TYPE, SortableItem } from "./sortable-item";

interface IChapterItemsProps {
	courseId: string;
	chapters: ISortableChapterProps[];
	onOpenChange: (chapterId: string) => void;
}

export const ChapterItems: FC<IChapterItemsProps> = ({
	courseId,
	chapters: items,
	onOpenChange
}) => {
	const t = useTranslations("EditCoursePage.courseStructure.chapters");
	return (
		<SortableContext items={items} strategy={verticalListSortingStrategy}>
			{items.map((item) => (
				<SortableItem
					key={item.id}
					id={item?.id}
					data={{
						type: ENUM_SORTABLE_ITEM_TYPE.CHAPTER,
						chapterId: item?.id
					}}
				>
					{(listeners) => (
						<Card className="p-0">
							<Collapsible
								open={item?.isOpen}
								className="p-0"
								onOpenChange={() => onOpenChange(item?.id)}
							>
								<div className="flex items-center justify-between p-3">
									<div className="flex items-center gap-2">
										<Button
											size={"icon"}
											variant={"ghost"}
											{...listeners}
										>
											<GripVertical size={16} />
										</Button>
										<CollapsibleTrigger asChild>
											<Button
												size={"icon"}
												variant={"ghost"}
											>
												{item?.isOpen ? (
													<ChevronDown size={16} />
												) : (
													<ChevronRight size={16} />
												)}
											</Button>
										</CollapsibleTrigger>

										<p className="cursor-pointer hover:text-primary p-2">
											{item?.title}
										</p>
									</div>
									<Button size={"icon"}>
										<Trash2 size={16} />
									</Button>
								</div>
								<CollapsibleContent>
									<div className="p-1  border-t border-border">
										<LessonItems
											courseId={courseId}
											chapterId={item?.id}
											lessons={item?.lessons}
										/>
										<div className="p-2">
											<Button
												variant={"outline"}
												className="w-full"
											>
												{t("buttons.new_lesson")}
											</Button>
										</div>
									</div>
								</CollapsibleContent>
							</Collapsible>
						</Card>
					)}
				</SortableItem>
			))}
		</SortableContext>
	);
};
