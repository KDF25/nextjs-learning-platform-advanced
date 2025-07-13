import { FC } from "react";

import { PublicCourseCard, TGetPublicCourse } from "@/entities/course";

interface ICoursesCardListProps {
	courses: TGetPublicCourse[];
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
