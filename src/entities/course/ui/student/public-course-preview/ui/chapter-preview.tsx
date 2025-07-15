import { IconChevronDown } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { FC } from "react";

import {
	Badge,
	Card,
	CardContent,
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from "@/shared/ui";

import { TGetPublicCourseBySlug } from "@/entities/course";

import { LessonPreview } from "./lesson-preview";

interface IChapterPreviewProps {
	chapter: TGetPublicCourseBySlug["chapters"][number];
	index: number;
}

export const ChapterPreview: FC<IChapterPreviewProps> = ({
	chapter,
	index
}) => {
	const t = useTranslations("UserCoursePage.preview.fields");
	return (
		<Collapsible key={chapter?.id} defaultOpen={index === 0}>
			<Card className="p-0 overflow-hidden border-2 transition-all duration-200 hover:shadow-md gap-0">
				<CollapsibleTrigger>
					<div>
						<CardContent className="p-6 hover:bg-muted/50 transition-colors">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-4">
									<p className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
										{index + 1}
									</p>

									<div className="flex flex-col gap-1 text-left">
										<h3 className="text-xl font-semibold">
											{chapter?.title}
										</h3>
										<p className="text-sm text-muted-foreground">
											{chapter?.lessons?.length}{" "}
											{t("lesson.count")}
										</p>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<Badge
										variant="outline"
										className="text-xs"
									>
										{chapter?.lessons?.length}{" "}
										{t("lesson.count")}
									</Badge>
									<IconChevronDown className="size-5 text-muted-foreground" />
								</div>
							</div>
						</CardContent>
					</div>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<div className="border-t bg-muted/20">
						<div className="p-6 space-y-3">
							{chapter?.lessons?.map((lesson, lessonIndex) => (
								<LessonPreview
									key={lesson?.id}
									lesson={lesson}
									index={lessonIndex}
								/>
							))}
						</div>
					</div>
				</CollapsibleContent>
			</Card>
		</Collapsible>
	);
};
