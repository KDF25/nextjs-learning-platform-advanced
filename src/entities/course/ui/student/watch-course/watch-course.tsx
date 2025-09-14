import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";
import { Button } from "@/shared/ui";

interface IWatchCourseProps {
	slug: string;
}

export const WatchCourse: FC<IWatchCourseProps> = ({ slug }) => {
	const t = useTranslations("StudentCoursePage.paymentCard");
	return (
		<Button asChild>
			<Link href={ENUM_PATHS.DASHBOARD.COURSE(slug)}>
				{t("buttons.watch")}
			</Link>
		</Button>
	);
};
