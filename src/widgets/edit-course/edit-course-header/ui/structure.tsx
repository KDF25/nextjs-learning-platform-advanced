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
import {
	SortableContext,
	arrayMove,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy
} from "@dnd-kit/sortable";
import {
	ChevronDown,
	ChevronRight,
	FileTextIcon,
	GripVertical,
	Trash2
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC, useState } from "react";
import { toast } from "sonner";

import { ENUM_PATHS } from "@/shared/config";
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from "@/shared/ui";

import { GetFullCourse } from "@/entities/course";

import { ENUM_SORTABLE_ITEM_TYPE, SortableItem } from "./sortable-item";

interface IStructureProps {
	course: GetFullCourse;
}

export const mockCourse = {
	id: "course-1",
	title: "Пример курса",
	description: "Тестовый курс с 3 главами и 3 уроками в каждой.",
	// Добавь остальные поля, если они требуются в твоей модели
	chapters: [
		{
			id: "chapter-1",
			title: "Глава 1: Введение",
			position: 1,
			lessons: [
				{ id: "lesson-1-1", title: "Урок 1.1", position: 1 },
				{ id: "lesson-1-2", title: "Урок 1.2", position: 2 },
				{ id: "lesson-1-3", title: "Урок 1.3", position: 3 }
			]
		},
		{
			id: "chapter-2",
			title: "Глава 2: Основы",
			position: 2,
			lessons: [
				{ id: "lesson-2-1", title: "Урок 2.1", position: 1 },
				{ id: "lesson-2-2", title: "Урок 2.2", position: 2 },
				{ id: "lesson-2-3", title: "Урок 2.3", position: 3 }
			]
		},
		{
			id: "chapter-3",
			title: "Глава 3: Продвинутое",
			position: 3,
			lessons: [
				{ id: "lesson-3-1", title: "Урок 3.1", position: 1 },
				{ id: "lesson-3-2", title: "Урок 3.2", position: 2 },
				{ id: "lesson-3-3", title: "Урок 3.3", position: 3 }
			]
		}
	]
};

export const Structure: FC<IStructureProps> = ({ course }) => {
	const t = useTranslations("EditCoursePage.courseStructure.chapters");
	const t2 = useTranslations("DnDkit");
	const initialItems =
		mockCourse?.chapters?.map((chapter) => ({
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

	const [items, setItems] = useState(initialItems);

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates
		})
	);

	const handleDragEnd = (event: DragEndEvent) => {
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
				toast.error(t2("toast.error.notFound"));
				return;
			}

			const reorderedLocalItems = arrayMove(items, oldIndex, newIndex);

			const updatedItems = reorderedLocalItems.map((item, index) => ({
				...item,
				order: index + 1
			}));

			setItems(updatedItems);
		} else if (
			activeType === ENUM_SORTABLE_ITEM_TYPE.LESSON &&
			overType === ENUM_SORTABLE_ITEM_TYPE.LESSON
		) {
			const chapterId = active?.data.current?.chapterId;
			const overChapterId = over?.data.current?.chapterId;

			if (!chapterId || chapterId !== overChapterId || !overChapterId) {
				toast.error(t2("toast.error.moveLesson"));
				return;
			}

			const chapterIndex = items.findIndex(
				(item) => item.id === chapterId
			);

			if (chapterIndex === -1) {
				toast.error(t2("toast.error.notFound"));
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
				toast.error(t2("toast.error.notFound"));
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

			setItems(newItems);
		}
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
					<SortableContext
						items={items}
						strategy={verticalListSortingStrategy}
					>
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
											onOpenChange={() =>
												toggleChapter(item?.id)
											}
										>
											<div className="flex items-center justify-between p-3">
												<div className="flex items-center gap-2">
													<Button
														size={"icon"}
														variant={"ghost"}
														{...listeners}
													>
														<GripVertical
															size={16}
														/>
													</Button>
													<CollapsibleTrigger asChild>
														<Button
															size={"icon"}
															variant={"ghost"}
														>
															{item?.isOpen ? (
																<ChevronDown
																	size={16}
																/>
															) : (
																<ChevronRight
																	size={16}
																/>
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
													<SortableContext
														items={item?.lessons?.map(
															(lesson) =>
																lesson?.id
														)}
														strategy={
															verticalListSortingStrategy
														}
													>
														{item?.lessons?.map(
															(lesson) => (
																<SortableItem
																	key={
																		lesson?.id
																	}
																	id={
																		lesson?.id
																	}
																	data={{
																		type: ENUM_SORTABLE_ITEM_TYPE.LESSON,
																		chapterId:
																			item?.id
																	}}
																>
																	{(
																		listenersLesson
																	) => (
																		<div className="flex items-center justify-between p-2 hover:bg-accent rounded-md">
																			<div className="flex items-center gap-2">
																				<Button
																					size={
																						"icon"
																					}
																					variant={
																						"ghost"
																					}
																					{...listenersLesson}
																				>
																					<GripVertical
																						size={
																							16
																						}
																					/>
																				</Button>
																				<FileTextIcon
																					size={
																						16
																					}
																				/>
																				<Link
																					href={ENUM_PATHS.ADMIN.LESSON(
																						course?.id,
																						item?.id,
																						lesson?.id
																					)}
																				>
																					{
																						lesson?.title
																					}
																				</Link>
																			</div>
																			<Button
																				size={
																					"icon"
																				}
																				variant={
																					"outline"
																				}
																			>
																				<Trash2
																					size={
																						16
																					}
																				/>
																			</Button>
																		</div>
																	)}
																</SortableItem>
															)
														)}
													</SortableContext>
													<div className="p-2">
														<Button
															variant={"outline"}
															className="w-full"
														>
															{t(
																"buttons.new_lesson"
															)}
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
				</CardContent>
			</Card>
		</DndContext>
	);
};
