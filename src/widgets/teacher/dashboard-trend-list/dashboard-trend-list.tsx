import { getTranslations } from "next-intl/server";
import { FC } from "react";

import { StatsDashboard, TeacherDashboardCard } from "@/entities/course";

import { DASHBOARD_CARD_LIST } from "./model";

export const DashboardTrendList: FC = async ({}) => {
	const { signUps, customers, courses, lessons } = await StatsDashboard();
	const t = await getTranslations("TeacherDashboardPage");
	return (
		<div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
			{DASHBOARD_CARD_LIST(
				signUps,
				customers,
				courses,
				lessons,
				t as unknown as typeof getTranslations
			).map((card, index) => (
				<TeacherDashboardCard key={index} {...card} />
			))}
		</div>
	);
};
