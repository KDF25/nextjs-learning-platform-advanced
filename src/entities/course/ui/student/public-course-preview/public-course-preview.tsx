import { IconCategory, IconChartBar, IconClock } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

import { Badge, Previewer, Separator } from "@/shared/ui";

import { TGetPublicCourseBySlug } from "../../../types";

import { ChapterPreview } from "./ui";

interface IPublicCoursePreviewProps {
	course: TGetPublicCourseBySlug;
}

export const PublicCoursePreview: FC<IPublicCoursePreviewProps> = ({
	course
}) => {
	const t = useTranslations("StudentCoursePage.preview");
	return (
		<>
			<div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg ">
				<Image
					src={course?.imageUrl || ""}
					alt={course?.title || ""}
					fill
					className="w-full h-full object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
			</div>

			<div className="mt-8 space-y-6">
				<div className="space-y-4">
					<h1 className="text-4xl font-bold tracking-tight">
						{course?.title}
					</h1>
					<p className="text-lg text-muted-foreground">
						{course?.smallDescription}
					</p>
				</div>
				<div className="flex flex-wrap gap-3">
					<Badge className="flex items-center gap-1 px-3 py-1">
						<IconChartBar size={16} />
						<span>{course?.level}</span>
					</Badge>
					<Badge className="flex items-center gap-1 px-3 py-1">
						<IconCategory size={16} />
						<span>{course?.category}</span>
					</Badge>
					<Badge className="flex items-center gap-1 px-3 py-1">
						<IconClock size={16} />
						<span>
							{course?.duration} {t("fields.duration.count")}
						</span>
					</Badge>
				</div>
				<Separator className="my-8" />

				<div className="space-y-6">
					<h2 className="text-3xl font-semibold tracking-tight">
						{t("fields.description.title")}
					</h2>

					<div>
						<Previewer
							json={JSON.parse(course?.description || "")}
						/>
					</div>
				</div>

				<div className="mt-12 space-y-6">
					<div className="flex items-center justify-between">
						<h2 className="text-3xl font-semibold tracking-tight">
							{t("fields.content.title")}
						</h2>

						<div>
							{course?.chapters?.length}{" "}
							{t("fields.chapter.count")} |{" "}
							{course?.chapters?.reduce(
								(total, chapter) =>
									total + (chapter?.lessons?.length || 0),
								0
							) || 0}{" "}
							{t("fields.lesson.count")}
						</div>
					</div>

					<div className="space-y-4">
						{course?.chapters?.map((chapter, index) => (
							<ChapterPreview
								key={chapter?.id}
								chapter={chapter}
								index={index}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
