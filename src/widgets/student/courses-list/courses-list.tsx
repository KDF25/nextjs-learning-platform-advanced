import { getTranslations } from "next-intl/server";
import React, { FC } from "react";

import { InfoCardList } from "@/shared/ui";

import { GetPublicCourses } from "@/entities/course";

import { CoursesCardList } from "./ui";

export const CoursesList: FC = async ({}) => {
	const t = await getTranslations("StudentCoursesPage");
	const courses = await GetPublicCourses();
	return (
		<>
			{!courses?.length ? (
				<InfoCardList
					title={t("empty.title")}
					description={t("empty.description")}
					button={<React.Fragment />}
				/>
			) : (
				<CoursesCardList courses={courses} />
			)}
		</>
	);
};
