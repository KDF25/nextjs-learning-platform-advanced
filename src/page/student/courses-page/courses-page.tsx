import { useTranslations } from "next-intl";
import { FC, Suspense } from "react";

import { CustomTitle } from "@/shared/ui";

import { GetPublicCourses } from "@/entities/course";

import { CoursesCardListSkeleton, CoursesList } from "@/widgets/student";

export const CoursesPage: FC = ({}) => {
	const t = useTranslations("StudentCoursesPage");
	return (
		<>
			<CustomTitle title={t("title")} description={t("description")} />
			<Suspense fallback={<CoursesCardListSkeleton />}>
				<CoursesList
					emptyTitle={t("empty.title")}
					emptyDescription={t("empty.description")}
					getCourses={GetPublicCourses}
				/>
			</Suspense>
		</>
	);
};
