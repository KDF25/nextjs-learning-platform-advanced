import { CheckCircle } from "lucide-react";
import { FC } from "react";

import { Button, Previewer, VideoPlayer } from "@/shared/ui";

import { GetCourseLesson } from "@/entities/course";

interface IDashboardLessonPageProps {
	lessonId: string;
}

export const DashboardLessonPage: FC<IDashboardLessonPageProps> = async ({
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
				<Button variant={"outline"} className="flex flex-row gap-2">
					<CheckCircle className="size-4 text-green-500" />
					Mark as completed
				</Button>
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
