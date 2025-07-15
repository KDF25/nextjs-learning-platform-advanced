import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC, Suspense } from "react";

import { ENUM_LIST_ELEMENTS, ENUM_PATHS } from "@/shared/config";
import { Button } from "@/shared/ui";

import {
	CoursesCardListSkeleton,
	CoursesList,
	DashboardChart,
	DashboardTrendList
} from "@/widgets/teacher";

export const DashboardPage: FC = ({}) => {
	const t = useTranslations("AdminDashboardPage");
	return (
		<>
			<DashboardTrendList />
			<DashboardChart />
			<div className="space-y-4">
				<div className="flex items-center justify-between gap-2">
					<h2 className="text-xl font-semibold">
						{t("recent.title")}
					</h2>
					<Button asChild variant={"outline"}>
						<Link href={ENUM_PATHS.ADMIN.COURSES}>
							{t("recent.buttons.view")}
						</Link>
					</Button>
				</div>
				<Suspense
					fallback={
						<CoursesCardListSkeleton
							count={ENUM_LIST_ELEMENTS.RECENT_COURSES}
						/>
					}
				>
					<CoursesList count={ENUM_LIST_ELEMENTS.RECENT_COURSES} />
				</Suspense>
			</div>
		</>
	);
};
