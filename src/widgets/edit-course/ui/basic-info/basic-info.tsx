"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/shared/ui";

import {
	CourseSchemaType,
	ENUM_CREATE_COURSE_ERRORS,
	GetFullCourse,
	courseSchema,
	useCourseEdit
} from "@/entities/course";

import { CourseDataForm } from "@/widgets/course-data-form";

export interface IBasicInfoProps {
	course: GetFullCourse;
}

export const BasicInfo: FC<IBasicInfoProps> = ({ course }) => {
	const t = useTranslations();
	const { isPending, editCourse } = useCourseEdit();
	const router = useRouter();

	const defaultValues = {
		title: course?.title,
		description: course?.description,
		imageUrl: course?.imageUrl,
		imageKey: course?.imageKey,
		price: course?.price,
		duration: course?.duration,
		level: course?.level,
		category: course?.category,
		smallDescription: course?.smallDescription,
		slug: course?.slug,
		status: course?.status
	} as CourseSchemaType;

	const form = useForm<CourseSchemaType>({
		resolver: zodResolver(courseSchema),
		defaultValues: {
			...defaultValues
		}
	});

	console.log(defaultValues);

	// const { reset } = form;

	const onSubmit = async (data: CourseSchemaType) => {
		if (JSON.stringify(data) === JSON.stringify(defaultValues)) {
			toast.warning(t("CourseForm.toast.edit.alert"));
			return;
		}
		const response = await editCourse(data);
		if (response?.success) {
			toast.success(t("CourseForm.toast.edit.success"));
			router.refresh();
		} else {
			let message = "";
			switch (response?.message) {
				case ENUM_CREATE_COURSE_ERRORS.INVALID_FORM_DATA:
					message = t("CourseForm.toast.invalid_form_data");
					break;
				case ENUM_CREATE_COURSE_ERRORS.NOT_FOUND:
					message = t("CourseForm.toast.not_found");
					break;
				default:
					message = t("CourseForm.toast.edit.error");
					break;
			}
			toast.error(message);
		}
	};
	return (
		<Card>
			<CardHeader>
				<CardTitle>{t("EditCoursePage.basicInfo.title")}</CardTitle>
				<CardDescription>
					{t("EditCoursePage.basicInfo.description")}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<CourseDataForm
					form={form}
					onSubmit={onSubmit}
					isPending={isPending}
					isEdit
				/>
			</CardContent>
		</Card>
	);
};
