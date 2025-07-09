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
	ChapterDataForm,
	ChapterSchemaType,
	ENUM_CREATE_CHAPTER_ERRORS,
	chapterSchema,
	useChapterCreate
} from "@/entities/chapter";

interface IAddNewChapterProps {
	courseId: string;
}

export const AddNewChapter: FC<IAddNewChapterProps> = ({ courseId }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const t = useTranslations();
	const { isPending, createChapter } = useChapterCreate();
	const form = useForm<ChapterSchemaType>({
		resolver: zodResolver(chapterSchema),
		defaultValues: {
			name: "",
			courseId
		}
	});

	const { reset } = form;

	const handleOpenChange = (open: boolean) => {
		setIsOpen(open);
	};

	const onSubmit = async (data: ChapterSchemaType) => {
		console.log("data", data);
		const response = await createChapter(data);
		if (response?.success) {
			toast.success(t("ChapterForm.toast.create.success"));
			reset();
		} else {
			let message = "";

			switch (response?.message) {
				case ENUM_CREATE_CHAPTER_ERRORS.INVALID_FORM_DATA:
					message = t("ChapterForm.toast.invalid_form_data");
					break;
				case ENUM_CREATE_CHAPTER_ERRORS.NOT_FOUND:
					message = t("ChapterForm.toast.not_found");
					break;
				default:
					message = t("ChapterForm.toast.create.error");
					break;
			}

			toast.error(message);
		}
		setIsOpen(false);
	};

	return (
		<Dialog open={isOpen} onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>
				<Button variant={"outline"} size={"sm"} className="gap-2">
					<Plus size={16} />
					{t(
						"EditCoursePage.courseStructure.chapters.buttons.new_chapter"
					)}
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>
						{t(
							"EditCoursePage.courseStructure.chapters.add.chapter.title"
						)}
					</DialogTitle>
					<DialogDescription>
						{t(
							"EditCoursePage.courseStructure.chapters.add.chapter.description"
						)}
					</DialogDescription>
				</DialogHeader>
				<ChapterDataForm
					form={form}
					onSubmit={onSubmit}
					isPending={isPending}
				/>
			</DialogContent>
		</Dialog>
	);
};
