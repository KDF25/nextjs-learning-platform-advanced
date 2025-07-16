import { FC } from "react";

import { EnrolledCourseCard, TGetEnrolledCourse } from "@/entities/course";

interface ICoursesCardListProps {
	courses: TGetEnrolledCourse[];
}

export const EnrolledCoursesCardList: FC<ICoursesCardListProps> = ({
	courses
}) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{courses?.map((course) => (
				<EnrolledCourseCard key={course.id} course={course} />
			))}
		</div>
	);
};
