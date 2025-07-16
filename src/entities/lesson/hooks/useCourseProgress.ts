import { useMemo } from "react";

import { TGetCourseSidebarType, TGetEnrolledCourse } from "@/entities/course";

export const useCourseProgress = (
	course?: TGetCourseSidebarType | TGetEnrolledCourse
) => {
	return useMemo(() => {
		if (!course) {
			return {
				totalLessons: 0,
				completeLessons: 0,
				progressLessons: 0
			};
		}

		const totalLessons =
			course.chapters?.reduce((acc, chapter) => {
				return acc + (chapter.lessons?.length || 0);
			}, 0) || 0;

		const completeLessons =
			course.chapters?.reduce((acc, chapter) => {
				const completedLessonsCount =
					chapter.lessons?.reduce((lessonAcc, lesson) => {
						const isCompleted = lesson.lessonProgress?.some(
							(p) => p?.completed
						);
						return lessonAcc + (isCompleted ? 1 : 0);
					}, 0) || 0;

				return acc + completedLessonsCount;
			}, 0) || 0;

		const progressLessons =
			totalLessons > 0
				? Math.round((completeLessons / totalLessons) * 100)
				: 0;

		return {
			totalLessons,
			completeLessons,
			progressLessons
		};
	}, [course]);
};
