import { Course } from "@prisma/client";
import { FC } from "react";

import { TeacherCourseCard } from "@/entities/course";

interface ICoursesCardListProps {
	courses: Course[];
}

export const CoursesCardList: FC<ICoursesCardListProps> = ({ courses }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{courses?.map((course) => (
				<TeacherCourseCard key={course.id} course={course} />
			))}
		</div>
	);
};
