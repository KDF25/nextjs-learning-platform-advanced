import { FC } from "react";

import { GetCourse, PublicCourseCard } from "@/entities/course";

interface ICoursesCardListProps {
	courses: GetCourse[];
}

export const CoursesCardList: FC<ICoursesCardListProps> = ({ courses }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{courses?.map((course) => (
				<PublicCourseCard key={course.id} course={course} />
			))}
		</div>
	);
};
