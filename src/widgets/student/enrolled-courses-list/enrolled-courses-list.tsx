import React, { FC } from "react";

import { InfoCardList } from "@/shared/ui";

import { TGetEnrolledCourse } from "@/entities/course";

import { EnrolledCoursesCardList } from "./ui";

interface IEnrolledCoursesListProps {
	emptyTitle: string;
	emptyDescription: string;
	emptyButton?: React.ReactNode;
	getCourses: () => Promise<TGetEnrolledCourse[]>;
}

export const EnrolledCoursesList: FC<IEnrolledCoursesListProps> = async ({
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
				<EnrolledCoursesCardList courses={courses} />
			)}
		</>
	);
};
