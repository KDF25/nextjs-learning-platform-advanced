"use client";

import { CheckCircle, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { toast } from "sonner";

import { useConfetti } from "@/shared/hooks";
import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";

import {
	ENUM_CRUD_LESSON_ERRORS,
	useMarkLessonComplete
} from "@/entities/lesson";

interface IMarkLessonCompleteProps {
	lessonId: string;
	slug: string;
	completed: boolean;
}

export const MarkLessonComplete: FC<IMarkLessonCompleteProps> = ({
	lessonId,
	slug,
	completed
}) => {
	const t = useTranslations("StudentDashboardLessonPage");
	const { triggerConfetti } = useConfetti();
	const { isPending, mark } = useMarkLessonComplete();

	const handleMark = async () => {
		const response = await mark({
			lessonId,
			slug,
			completed: !completed
		});
		if (response?.success) {
			if (!completed) {
				toast.success(t("toast.complete"));
				triggerConfetti();
			} else {
				toast.success(t("toast.incomplete"));
			}
		} else {
			let message = "";

			switch (response?.message) {
				case ENUM_CRUD_LESSON_ERRORS.NOT_FOUND:
					message = t("toast.not_found");
					break;
				default:
					message = t("toast.error");
					break;
			}

			toast.error(message);
		}
	};

	return (
		<Button
			variant={"outline"}
			className="flex flex-row gap-2"
			onClick={handleMark}
			disabled={isPending}
		>
			<CheckCircle
				size={16}
				className={cn(
					completed ? "text-green-500" : "text-muted-foreground"
				)}
			/>
			{isPending ? (
				<>
					{completed ? (
						<>{t("buttons.incomplete")}</>
					) : (
						<>{t("buttons.marking")}</>
					)}
					<Loader2 className="animate-spin" />
				</>
			) : (
				<>
					{completed ? (
						<>{t("buttons.complete")}</>
					) : (
						<>{t("buttons.mark")}</>
					)}
				</>
			)}
		</Button>
	);
};
