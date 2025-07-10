import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";
import { Button } from "@/shared/ui";

import { getLesson } from "@/entities/lesson";

import { EditLesson } from "@/widgets/edit-lesson";

interface ILessonIdEditPageProps {
	courseId: string;
	chapterId: string;
	lessonId: string;
}

export const LessonIdEditPage: FC<ILessonIdEditPageProps> = async ({
	courseId,
	chapterId,
	lessonId
}) => {
	const t = await getTranslations("EditLessonPage");
	const lesson = await getLesson({ courseId, chapterId, lessonId });

	return (
		<>
			<div className="flex items-center gap-6">
				<Button asChild variant="outline">
					<Link
						href={ENUM_PATHS.ADMIN.EDIT(courseId)}
						className="gap-2"
					>
						<ArrowLeft className="h-4 w-4" />
						{t("buttons.back")}
					</Link>
				</Button>
				<h1 className="text-2xl font-bold">{t("title")}</h1>
			</div>
			<EditLesson
				courseId={courseId}
				chapterId={chapterId}
				lesson={lesson}
			/>
		</>
	);
};
