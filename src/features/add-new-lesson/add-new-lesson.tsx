"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/shared/ui";

import {
	CreateLessonDataForm,
	ENUM_CRUD_LESSON_ERRORS,
	LessonSchemaType,
	lessonSchema,
	useLessonCreate
} from "@/entities/lesson";

interface IAddNewLessonProps {
	courseId: string;
	chapterId: string;
}

export const AddNewLesson: FC<IAddNewLessonProps> = ({
	courseId,
	chapterId
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const t = useTranslations();
	const { isPending, createLesson } = useLessonCreate();
	const form = useForm<LessonSchemaType>({
		resolver: zodResolver(lessonSchema),
		defaultValues: {
			title: "",
			courseId,
			chapterId
		}
	});

	const { reset } = form;

	const handleOpenChange = (open: boolean) => {
		setIsOpen(open);
	};

	const onSubmit = async (data: LessonSchemaType) => {
		const response = await createLesson(data);

		if (response?.success) {
			toast.success(t("LessonForm.toast.create.success"));
			reset();
		} else {
			let message = "";

			switch (response?.message) {
				case ENUM_CRUD_LESSON_ERRORS.INVALID_FORM_DATA:
					message = t("LessonForm.toast.invalid_form_data");
					break;
				case ENUM_CRUD_LESSON_ERRORS.NOT_FOUND:
					message = t("LessonForm.toast.not_found");
					break;
				default:
					message = t("LessonForm.toast.create.error");
					break;
			}

			toast.error(message);
		}
		setIsOpen(false);
	};

	return (
		<Dialog open={isOpen} onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>
				<Button
					variant={"outline"}
					size={"sm"}
					className="gap-2 w-full"
				>
					<Plus size={16} />
					{t(
						"EditCoursePage.courseStructure.chapters.buttons.new_lesson"
					)}
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>
						{t(
							"EditCoursePage.courseStructure.chapters.add.lesson.title"
						)}
					</DialogTitle>
					<DialogDescription>
						{t(
							"EditCoursePage.courseStructure.chapters.add.lesson.description"
						)}
					</DialogDescription>
				</DialogHeader>
				<CreateLessonDataForm
					form={form}
					onSubmit={onSubmit}
					isPending={isPending}
				/>
			</DialogContent>
		</Dialog>
	);
};
