import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";
import { Button } from "@/shared/ui";

interface IWatchCourseProps {
	courseId: string;
}

export const WatchCourse: FC<IWatchCourseProps> = ({}) => {
	const t = useTranslations("UserCoursePage.paymentCard");
	return (
		<Button asChild>
			<Link href={ENUM_PATHS.MAIN}>{t("buttons.watch")}</Link>
		</Button>
	);
};
