"use client";

import { Loader, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import { toast } from "sonner";

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
	Button
} from "@/shared/ui";

import { ENUM_CRUD_LESSON_ERRORS, useLessonDelete } from "@/entities/lesson";

interface IDeleteLessonProps {
	courseId: string;
	chapterId: string;
	lessonId: string;
}

export const DeleteLesson: FC<IDeleteLessonProps> = ({
	courseId,
	chapterId,
	lessonId
}) => {
	const t = useTranslations();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { isPending, deleteLesson } = useLessonDelete();
	const handleOpenChange = (open: boolean) => {
		setIsOpen(open);
	};

	const handleDelete = async () => {
		const response = await deleteLesson({
			courseId,
			chapterId,
			lessonId
		});
		if (response?.success) {
			toast.success(t("LessonForm.toast.delete.success"));
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
					message = t("LessonForm.toast.delete.error");
					break;
			}

			toast.error(message);
		}
		setIsOpen(false);
	};

	return (
		<AlertDialog open={isOpen} onOpenChange={handleOpenChange}>
			<AlertDialogTrigger asChild>
				<Button size={"icon"} variant={"outline"}>
					<Trash2 size={16} />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						{t(
							"EditCoursePage.courseStructure.chapters.delete.lesson.title"
						)}
					</AlertDialogTitle>
					<AlertDialogDescription>
						{t(
							"EditCoursePage.courseStructure.chapters.delete.lesson.description"
						)}
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>
						{t(
							"EditCoursePage.courseStructure.chapters.buttons.cancel"
						)}
					</AlertDialogCancel>
					<Button
						disabled={isPending}
						onClick={handleDelete}
						className="gap-1"
					>
						{isPending ? (
							<>
								{t(
									"EditCoursePage.courseStructure.chapters.buttons.deleting"
								)}
								<Loader size={16} className="animate-spin" />
							</>
						) : (
							<>
								{t(
									"EditCoursePage.courseStructure.chapters.buttons.delete"
								)}
							</>
						)}
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
