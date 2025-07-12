import { FC } from "react";

import { ENUM_LIST_ELEMENTS } from "@/shared/config";

import { CourseCardSkeleton } from "@/entities/course";

export const CoursesCardListSkeleton: FC = ({}) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols2 md:grid-cols-1 lg:grid-cols-2 gap-7">
			{Array.from({ length: ENUM_LIST_ELEMENTS.ADMIN_COURSES }).map(
				(_, index) => (
					<CourseCardSkeleton key={index} />
				)
			)}
		</div>
	);
};
