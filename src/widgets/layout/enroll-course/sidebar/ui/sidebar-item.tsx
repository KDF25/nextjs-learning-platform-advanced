"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { FC } from "react";

import {
	Button,
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from "@/shared/ui";

import { TGetCourseSidebarType } from "@/entities/course";

import { LessonItem } from "./lesson-item";

interface ISidebarItemProps {
	slug: string;
	chapter: NonNullable<TGetCourseSidebarType>["chapters"][number];
	index: number;
}

export const SidebarItem: FC<ISidebarItemProps> = ({
	slug,
	chapter,
	index
}) => {
	const t = useTranslations("EnrollCourseSidebar");
	const pathname = usePathname();
	const currentLessonId = pathname?.split("/").pop();

	return (
		<Collapsible key={chapter?.id} defaultOpen={index === 0}>
			<CollapsibleTrigger asChild>
				<Button
					variant={"outline"}
					className="w-full p-3 h-auto items-center gap-2"
				>
					<div className="shrink-0">
						<ChevronDown className="size-4 text-primary" />
					</div>
					<div className="flex-1 text-left min-w-0">
						<p className="font-semibold text-sm truncate text-foreground">
							№{chapter?.position}: {chapter?.title}
						</p>
						<p className="text-[10px] text-muted-foreground font-medium truncate">
							{chapter?.lessons?.length} {t("lessons.title")}
						</p>
					</div>
				</Button>
			</CollapsibleTrigger>
			<CollapsibleContent className="mt-3 pl-6 border-l-2 space-y-3">
				{chapter?.lessons?.map((lesson) => (
					<LessonItem
						key={lesson?.id}
						lesson={lesson}
						slug={slug}
						isActive={lesson?.id === currentLessonId}
					/>
				))}
			</CollapsibleContent>
		</Collapsible>
	);
};
