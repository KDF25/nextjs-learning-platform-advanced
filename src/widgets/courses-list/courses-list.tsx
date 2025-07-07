import { Course } from "@prisma/client";
import { FC } from "react";

import { CourseCard } from "@/entities/course";

interface ICoursesListProps {
	courses: Course[];
}

export const CoursesList: FC<ICoursesListProps> = ({ courses }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols2 md:grid-cols-1 lg:grid-cols-2 gap-7">
			{courses?.map((course) => (
				<CourseCard key={course.id} course={course} />
			))}
		</div>
	);
};
