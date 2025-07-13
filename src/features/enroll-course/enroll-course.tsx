import { useTranslations } from "next-intl";
import { FC } from "react";

import { Button } from "@/shared/ui";

interface IEnrollCourseProps {
	courseId: string;
}

export const EnrollCourse: FC<IEnrollCourseProps> = ({}) => {
	const t = useTranslations("UserCoursePage.paymentCard");
	return <Button>{t("buttons.enroll")}</Button>;
};
