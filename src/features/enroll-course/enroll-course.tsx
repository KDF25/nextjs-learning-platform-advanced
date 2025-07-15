"use client";

import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { toast } from "sonner";

import { Button } from "@/shared/ui";

import { ENUM_CRUD_COURSE_ERRORS, useCourseEnroll } from "@/entities/course";

interface IEnrollCourseProps {
	courseId: string;
}

export const EnrollCourse: FC<IEnrollCourseProps> = ({ courseId }) => {
	const t = useTranslations("StudentCoursePage");

	const { isPending, enrollCourse } = useCourseEnroll();

	const handleEnroll = async () => {
		const response = await enrollCourse(courseId);
		if (!response) {
			toast.success(t("toast.redirecting"));
		} else {
			let message = "";

			switch (response?.message) {
				case ENUM_CRUD_COURSE_ERRORS.ENROLL_ERROR:
					message = t("toast.error");
					break;
				case ENUM_CRUD_COURSE_ERRORS.NOT_FOUND:
					message = t("toast.not_found");
					break;
				default:
					message = t("toast.enroll.error");
					break;
			}

			toast.error(message);
		}
	};
	return (
		<Button
			disabled={isPending}
			onClick={handleEnroll}
			className="flex gap-1"
		>
			{isPending ? (
				<>
					{t("paymentCard.buttons.enrolling")}
					<Loader2 size={16} className="animate-spin" />
				</>
			) : (
				<>{t("paymentCard.buttons.enroll")}</>
			)}
		</Button>
	);
};
