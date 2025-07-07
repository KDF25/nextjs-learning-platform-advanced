"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
	CourseSchemaType,
	ENUM_COURSE_CATEGORY,
	ENUM_COURSE_LEVELS,
	ENUM_COURSE_STATUS,
	courseSchema,
	useCourseCreate
} from "@/entities/course";
import { ENUM_CREATE_COURSE_ERRORS } from "@/entities/course";

import { CourseDataForm } from "../course-data-form";

export const CourseCreate: FC = ({}) => {
	const t = useTranslations();
	const { isPending, createCourse } = useCourseCreate();
	const router = useRouter();

	const form = useForm<CourseSchemaType>({
		resolver: zodResolver(courseSchema),
		defaultValues: {
			title: "",
			description: "",
			imageUrl: "",
			imageKey: "",
			price: 0,
			duration: 0,
			level: ENUM_COURSE_LEVELS[0],
			category: ENUM_COURSE_CATEGORY[0],
			smallDescription: "",
			slug: "",
			status: ENUM_COURSE_STATUS[0]
		}
	});

	const { reset } = form;

	const onSubmit = async (data: CourseSchemaType) => {
		const response = await createCourse(data);
		if (response?.success) {
			toast.success(t("CourseForm.toast.create.success"));
			reset();
			router.push(ENUM_PATHS.ADMIN.COURSES);
		} else {
			let message = "";

			switch (response?.message) {
				case ENUM_CREATE_COURSE_ERRORS.INVALID_FORM_DATA:
					message = t("CourseForm.toast.invalid_form_data");
					break;
				case ENUM_CREATE_COURSE_ERRORS.DUPLICATE_SLUG:
					message = t("CourseForm.toast.duplicate_slug");
					break;
				default:
					message = t("CourseForm.toast.create.error");
					break;
			}

			toast.error(message);
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>{t("CreateCoursePage.basicInfo.title")}</CardTitle>
				<CardDescription>
					{t("CreateCoursePage.basicInfo.description")}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<CourseDataForm
					form={form}
					onSubmit={onSubmit}
					isPending={isPending}
				/>
			</CardContent>
		</Card>
	);
};
