import React, { FC } from "react";

import { InfoCardList } from "@/shared/ui";

import { TGetPublicCourse } from "@/entities/course";

import { CoursesCardList } from "./ui";

interface ICoursesListProps {
	emptyTitle: string;
	emptyDescription: string;
	emptyButton?: React.ReactNode;
	getCourses: () => Promise<TGetPublicCourse[]>;
}

export const CoursesList: FC<ICoursesListProps> = async ({
	emptyTitle,
	emptyDescription,
	emptyButton: Button = null,
	getCourses
}) => {
	const courses = await getCourses();
	return (
		<>
			{!courses?.length ? (
				<InfoCardList
					title={emptyTitle}
					description={emptyDescription}
					button={Button}
				/>
			) : (
				<CoursesCardList courses={courses} />
			)}
		</>
	);
};
