import { useTranslations } from "next-intl";
import { FC, Suspense } from "react";

import { CustomTitle } from "@/shared/ui";

import { GetEnrolledCourses, GetPublicCourses } from "@/entities/course";

import {
	CoursesCardListSkeleton,
	CoursesList,
	EnrolledCoursesCardListSkeleton,
	EnrolledCoursesList
} from "@/widgets/student";

export const DashboardPage: FC = ({}) => {
	const t = useTranslations("StudentDashboardPage");
	return (
		<>
			<CustomTitle
				title={t("enroll.title")}
				description={t("enroll.description")}
			/>
			<EnrolledCoursesCardListSkeleton />
			<Suspense fallback={<EnrolledCoursesCardListSkeleton />}>
				<EnrolledCoursesList
					emptyTitle={t("enroll.empty.title")}
					emptyDescription={t("enroll.empty.description")}
					getCourses={GetEnrolledCourses}
				/>
			</Suspense>
			<CustomTitle
				title={t("available.title")}
				description={t("available.description")}
			/>
			<Suspense fallback={<CoursesCardListSkeleton />}>
				<CoursesList
					emptyTitle={t("available.empty.title")}
					emptyDescription={t("available.empty.description")}
					getCourses={GetPublicCourses}
				/>
			</Suspense>
		</>
	);
};
