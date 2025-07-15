import { Check, Play } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";
import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";

import { TGetCourseSidebarType } from "@/entities/course";

interface ILessonItemProps {
	slug: string;
	lesson: NonNullable<TGetCourseSidebarType>["chapters"][number]["lessons"][number];
	isActive?: boolean;
}

export const LessonItem: FC<ILessonItemProps> = ({
	slug,
	lesson,
	isActive = false
}) => {
	const completed = true;
	const t = useTranslations("EnrollCourseSidebar");
	return (
		<Button
			asChild
			variant={completed ? "secondary" : "outline"}
			className={cn(
				"w-full p-2.5 h-auto justify-start transition-all",
				completed &&
					"bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700 hover:bg-green-200 dark:hover:bg-green-900/50 text-green-800 dark:text-green-200",
				isActive &&
					!completed &&
					"bg-primary/10 dark:bg-primary/20 border-primary/50 dark:border-primary/30 hover:bg-primary/80 text-primary"
			)}
		>
			<Link href={ENUM_PATHS.DASHBOARD.LESSON(slug, lesson?.id)}>
				<div className="flex items-center gap-2.5 w-full min-w-0">
					<div className="shrink-0">
						{completed ? (
							<div className="size-5 rounded-full bg-green-600 dark:bg-green-500 flex justify-center items-center">
								<Check className="size-3 text-white" />
							</div>
						) : (
							<div
								className={cn(
									"size-5 rounded-full border-2 bg-background flex justify-center items-center",
									isActive
										? "border-primary bg-primary/10 dark:bg-primary/20"
										: "border-muted-foreground/60"
								)}
							>
								<Play
									className={cn(
										"size-2.5 fill-current",
										isActive
											? "text-primary"
											: "text-muted-foreground"
									)}
								/>
							</div>
						)}
					</div>
					<div>
						<p className="text-xs font-medium truncate">
							№ {lesson?.position}. {lesson?.title}
						</p>
						{completed && (
							<p className="text-[10px] font-medium truncate">
								{t("lessons.completed")}
							</p>
						)}
						{isActive && !completed && (
							<p className="text-[10px] font-medium truncate">
								{t("lessons.watching")}
							</p>
						)}
					</div>
				</div>
			</Link>
		</Button>
	);
};
