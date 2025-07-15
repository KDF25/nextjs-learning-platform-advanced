"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import isEqual from "lodash/isEqual";
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
	ENUM_CRUD_COURSE_ERRORS,
	TGetFullCourse,
	courseSchema,
	useCourseEdit
} from "@/entities/course";
import { CourseDataForm } from "@/entities/course/ui/teacher/course-data-form";

import { GenerateSlug } from "@/features/generate-slug";

export interface IBasicInfoProps {
	course: TGetFullCourse;
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

	const { setValue, watch } = form;
	const formState = watch();

	const onSubmit = async (data: CourseSchemaType) => {
		if (isEqual(data, defaultValues)) {
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
				case ENUM_CRUD_COURSE_ERRORS.INVALID_FORM_DATA:
					message = t("CourseForm.toast.invalid_form_data");
					break;
				case ENUM_CRUD_COURSE_ERRORS.NOT_FOUND:
					message = t("CourseForm.toast.not_found");
					break;
				default:
					message = t("CourseForm.toast.edit.error");
					break;
			}
			toast.error(message);
		}
	};

	const handleGenerateSlug = (slug: string) => {
		setValue("slug", slug);
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
					GenerateSlugBtn={
						<GenerateSlug
							onChange={handleGenerateSlug}
							title={formState.title}
						/>
					}
				/>
			</CardContent>
		</Card>
	);
};
