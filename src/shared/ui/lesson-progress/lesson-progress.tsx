import { useTranslations } from "next-intl";
import { FC } from "react";

import { TGetCourseSidebarType, TGetEnrolledCourse } from "@/entities/course";
import { useCourseProgress } from "@/entities/lesson";

import { Progress } from "../shadcn-ui";

interface ILessonProgressProps {
	course?: TGetCourseSidebarType | TGetEnrolledCourse;
}

export const LessonProgress: FC<ILessonProgressProps> = ({ course }) => {
	const t = useTranslations("StudentCoursesPage");
	const { totalLessons, completeLessons, progressLessons } =
		useCourseProgress(course);
	return (
		<div className="space-y-2">
			<div className="flex justify-between text-xs">
				<span className="text-muted-foreground">
					{t("card.progress.title")}
				</span>
				<span className="font-medium">
					{completeLessons}/{totalLessons}{" "}
					{t("card.progress.lessons")}
				</span>
			</div>
			<Progress value={progressLessons} className="h-1.5" />
			<p className="text-xs text-muted-foreground">
				{progressLessons}% {t("card.progress.completed")}
			</p>
		</div>
	);
};
