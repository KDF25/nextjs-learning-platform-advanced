import { FC } from "react";

import { ENUM_LIST_ELEMENTS } from "@/shared/config";

import { EnrolledCourseCardSkeleton } from "@/entities/course";

export const EnrolledCoursesCardListSkeleton: FC = ({}) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{Array.from({ length: ENUM_LIST_ELEMENTS.ENROLLED_COURSES }).map(
				(_, index) => (
					<EnrolledCourseCardSkeleton key={index} />
				)
			)}
		</div>
	);
};
