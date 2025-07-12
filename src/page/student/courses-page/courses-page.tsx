import { useTranslations } from "next-intl";
import { FC, Suspense } from "react";

import { CoursesCardListSkeleton, CoursesList } from "@/widgets/student";

export const CoursesPage: FC = ({}) => {
	const t = useTranslations("UserCoursesPage");
	return (
		<>
			<div className="flex flex-col space-y-2 mb-10">
				<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
					{t("title")}
				</h1>
				<p className="text-muted-foreground">{t("description")}</p>
			</div>
			<Suspense fallback={<CoursesCardListSkeleton />}>
				<CoursesList />
			</Suspense>
		</>
	);
};
