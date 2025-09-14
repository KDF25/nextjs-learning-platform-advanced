import { FC } from "react";

import {
	CoursePaymentCard,
	GetPublicCourseBySlug,
	PublicCoursePreview,
	WatchCourse,
	checkCourseBought
} from "@/entities/course";

import { EnrollCourse } from "@/features/enroll-course";

interface ICourseSlugPageProps {
	slug: string;
}

export const CourseSlugPage: FC<ICourseSlugPageProps> = async ({ slug }) => {
	const course = await GetPublicCourseBySlug(slug);
	const isEnrolled = await checkCourseBought(course?.id);

	return (
		<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
			<div className="order-1 lg:col-span-2">
				<PublicCoursePreview course={course} />
			</div>
			<div className="order-2 lg:col-span-1">
				<div className="sticky top-20">
					<CoursePaymentCard
						course={course}
						ActionBtn={
							isEnrolled ? (
								<WatchCourse slug={slug} />
							) : (
								<EnrollCourse courseId={course?.id} />
							)
						}
					/>
				</div>
			</div>
		</div>
	);
};
