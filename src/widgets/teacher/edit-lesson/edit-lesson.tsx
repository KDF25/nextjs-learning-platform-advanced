"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Lesson } from "@prisma/client";
import isEqual from "lodash/isEqual";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { ENUM_PATHS } from "@/shared/config";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/shared/ui";

import {
	ENUM_CRUD_LESSON_ERRORS,
	EditLessonDataForm,
	LessonSchemaType,
	lessonSchema,
	useLessonEdit
} from "@/entities/lesson";

interface IEditLessonProps {
	courseId: string;
	chapterId: string;
	lesson: Lesson;
}

export const EditLesson: FC<IEditLessonProps> = ({
	courseId,
	chapterId,
	lesson
}) => {
	const t = useTranslations();
	const { isPending, editLesson } = useLessonEdit();
	const router = useRouter();

	const defaultValues = {
		lessonId: lesson?.id,
		chapterId: chapterId,
		courseId: courseId,
		title: lesson?.title,
		description: lesson?.description || undefined,
		videoUrl: lesson?.videoUrl || undefined,
		videoKey: lesson?.videoKey || undefined,
		imageUrl: lesson?.imageUrl || undefined,
		imageKey: lesson?.imageKey || undefined
	} as LessonSchemaType;

	const form = useForm<LessonSchemaType>({
		resolver: zodResolver(lessonSchema),
		defaultValues: {
			...defaultValues
		}
	});

	const { reset } = form;

	const onSubmit = async (data: LessonSchemaType) => {
		if (isEqual(data, defaultValues)) {
			toast.warning(t("LessonForm.toast.edit.alert"));
			return;
		}

		const response = await editLesson(data);
		if (response?.success) {
			toast.success(t("LessonForm.toast.edit.success"));
			reset();
			router.push(ENUM_PATHS.TEACHER.EDIT(courseId));
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
					message = t("LessonForm.toast.edit.error");
					break;
			}
			toast.error(message);
		}
	};
	return (
		<Card>
			<CardHeader>
				<CardTitle>{t("LessonForm.title")}</CardTitle>
				<CardDescription>{t("LessonForm.description")}</CardDescription>
			</CardHeader>
			<CardContent>
				<EditLessonDataForm
					form={form}
					onSubmit={onSubmit}
					isPending={isPending}
				/>
			</CardContent>
		</Card>
	);
};
