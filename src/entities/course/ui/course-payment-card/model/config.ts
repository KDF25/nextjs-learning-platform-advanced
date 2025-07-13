import {
	IconBook,
	IconCategory,
	IconChartBar,
	IconClock
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";

import { TGetPublicCourseBySlug } from "@/entities/course";

import { ILearnRowProps } from "./types";

export const LEARN_ROW_LIST = (
	course: TGetPublicCourseBySlug,
	t: typeof useTranslations
): ILearnRowProps[] => [
	{
		title: `${t("learn.duration.title")}`,
		parameter: `${course?.duration} ${t("learn.duration.count")}`,
		icon: IconClock
	},
	{
		title: `${t("learn.level.title")}`,
		parameter: course?.level,
		icon: IconChartBar
	},
	{
		title: `${t("learn.category.title")}`,
		parameter: course?.category,
		icon: IconCategory
	},
	{
		title: `${t("learn.lessons.title")}`,
		parameter: `${
			course?.chapters?.reduce(
				(acc, chapter) => acc + chapter?.lessons?.length,
				0
			) || 0
		} ${t("learn.lessons.count")}`,
		icon: IconBook
	}
];
