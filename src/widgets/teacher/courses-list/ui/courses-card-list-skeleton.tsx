import { FC } from "react";

import { ENUM_LIST_ELEMENTS } from "@/shared/config";

import { TeacherCourseCardSkeleton } from "@/entities/course";

interface ICoursesCardListProps {
	count?: number;
}

export const CoursesCardListSkeleton: FC<ICoursesCardListProps> = ({
	count = ENUM_LIST_ELEMENTS.ADMIN_COURSES
}) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{Array.from({ length: count }).map((_, index) => (
				<TeacherCourseCardSkeleton key={index} />
			))}
		</div>
	);
};
