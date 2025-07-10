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

import { ENUM_CRUD_CHAPTER_ERRORS, useChapterDelete } from "@/entities/chapter";

interface IDeleteChapterProps {
	courseId: string;
	chapterId: string;
}

export const DeleteChapter: FC<IDeleteChapterProps> = ({
	courseId,
	chapterId
}) => {
	const t = useTranslations();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { isPending, deleteChapter } = useChapterDelete();
	const handleOpenChange = (open: boolean) => {
		setIsOpen(open);
	};

	const handleDelete = async () => {
		const response = await deleteChapter({
			courseId,
			chapterId
		});
		if (response?.success) {
			toast.success(t("ChapterForm.toast.delete.success"));
		} else {
			let message = "";

			switch (response?.message) {
				case ENUM_CRUD_CHAPTER_ERRORS.INVALID_FORM_DATA:
					message = t("ChapterForm.toast.invalid_form_data");
					break;
				case ENUM_CRUD_CHAPTER_ERRORS.NOT_FOUND:
					message = t("ChapterForm.toast.not_found");
					break;
				default:
					message = t("ChapterForm.toast.delete.error");
					break;
			}

			toast.error(message);
		}
		setIsOpen(false);
	};

	return (
		<AlertDialog open={isOpen} onOpenChange={handleOpenChange}>
			<AlertDialogTrigger asChild>
				<Button size={"icon"}>
					<Trash2 size={16} />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						{t(
							"EditCoursePage.courseStructure.chapters.delete.chapter.title"
						)}
					</AlertDialogTitle>
					<AlertDialogDescription>
						{t(
							"EditCoursePage.courseStructure.chapters.delete.chapter.description"
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
						variant="destructive"
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
