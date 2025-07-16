import { FC } from "react";

import { Previewer, VideoPlayer } from "@/shared/ui";

import { GetCourseLesson } from "@/entities/course";

import { MarkLessonComplete } from "@/features/mark-lesson-complete";

interface IDashboardLessonPageProps {
	slug: string;
	lessonId: string;
}

export const DashboardLessonPage: FC<IDashboardLessonPageProps> = async ({
	slug,
	lessonId
}) => {
	const lesson = await GetCourseLesson(lessonId);

	return (
		<div className="flex flex-col h-full bg-background space-y-2">
			<VideoPlayer
				videoUrl={lesson?.videoUrl || ""}
				imageUrl={lesson?.imageUrl || ""}
			/>
			<div className="py-4 border-b">
				<MarkLessonComplete
					lessonId={lessonId}
					slug={slug}
					completed={
						lesson?.lessonProgress?.find(
							(progress) => progress?.lessonId === lessonId
						)?.completed || false
					}
				/>
			</div>
			<div className="space-y-3">
				<h1 className="text-3xl font-bold tracking-tight text-foreground">
					{lesson?.title}
				</h1>

				{lesson?.description && (
					<Previewer json={JSON.parse(lesson?.description || "")} />
				)}
			</div>
		</div>
	);
};
