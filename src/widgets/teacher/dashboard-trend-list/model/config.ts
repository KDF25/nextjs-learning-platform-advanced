import { BookOpen, LibraryBig, ShoppingCart, User } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { ITeacherDashboardCardProps } from "@/entities/course";

export const DASHBOARD_CARD_LIST = (
	signUps: number,
	customers: number,
	courses: number,
	lessons: number,
	t: typeof getTranslations
): ITeacherDashboardCardProps[] => {
	return [
		{
			header: `${t("cards.signups.header")}`,
			parameter: signUps.toString(),
			title: `${t("cards.signups.title")}`,
			description: `${t("cards.signups.description")}`,
			icon: User
		},
		{
			header: `${t("cards.customers.header")}`,
			parameter: customers.toString(),
			title: `${t("cards.customers.title")}`,
			description: `${t("cards.customers.description")}`,
			icon: ShoppingCart
		},
		{
			header: `${t("cards.courses.header")}`,
			parameter: courses.toString(),
			title: `${t("cards.courses.title")}`,
			description: `${t("cards.courses.description")}`,
			icon: BookOpen
		},
		{
			header: `${t("cards.lessons.header")}`,
			parameter: lessons.toString(),
			title: `${t("cards.lessons.title")}`,
			description: `${t("cards.lessons.description")}`,
			icon: LibraryBig
		}
	];
};
