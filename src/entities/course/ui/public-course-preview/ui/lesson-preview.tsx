import { IconPlayerPlay } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { FC } from "react";

import { TGetPublicCourseBySlug } from "@/entities/course";

interface ILessonPreviewProps {
	lesson: TGetPublicCourseBySlug["chapters"][number]["lessons"][number];
	index: number;
}

export const LessonPreview: FC<ILessonPreviewProps> = ({ lesson, index }) => {
	const t = useTranslations("UserCoursePage.preview.fields");
	return (
		<div
			key={lesson?.id}
			className="flex items-center gap-3 group hover:bg-muted/50 transition-colors cursor-pointer py-2 px-3 rounded-md"
		>
			<div className="flex size-8 items-center justify-center rounded-full bg-background border-2 border-primary/20">
				<IconPlayerPlay className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
			</div>
			<div className="flex-1 gap-1">
				<p className="font-medium text-sm">{lesson?.title}</p>
				<p className="text-xs text-muted-foreground">
					{t("lesson.title")} {index + 1}
				</p>
			</div>
		</div>
	);
};
