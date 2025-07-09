import { useTranslations } from "next-intl";
import { FC } from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/shared/ui";

import { GetFullCourse } from "@/entities/course";

import { Structure } from "./ui";

export interface ICourseStructureProps {
	course: GetFullCourse;
}

export const CourseStructure: FC<ICourseStructureProps> = ({ course }) => {
	const t = useTranslations();
	return (
		<Card>
			<CardHeader>
				<CardTitle>{t("EditCoursePage.basicInfo.title")}</CardTitle>
				<CardDescription>
					{t("EditCoursePage.basicInfo.description")}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Structure course={course} />
			</CardContent>
		</Card>
	);
};
