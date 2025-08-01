import { Play } from "lucide-react";
import { FC } from "react";

import { LessonProgress } from "@/shared/ui";

import { TGetCourseSidebarType } from "@/entities/course";

import { SidebarItem } from "./ui";

interface IEnrollCourseSidebarProps {
	course: TGetCourseSidebarType;
}

export const EnrollCourseSidebar: FC<IEnrollCourseSidebarProps> = ({
	course
}) => {
	return (
		<div className="flex flex-col h-full">
			<div className="pb-4 pr-4 border-b border-border">
				<div className="flex items-center gap-3 mb-3">
					<div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
						<Play className="size-5" />
					</div>
					<div className="flex-1 min-w-0 gap-1 flex flex-col">
						<h1 className="truncate font-semibold text-base leading-tight">
							{course?.title}
						</h1>
						<p className="text-sm text-muted-foreground truncate">
							{course?.category}
						</p>
					</div>
				</div>
				<LessonProgress course={course} />
			</div>
			<div className="py-4 pr-4 space-y-3">
				{course?.chapters?.map((chapter, index) => (
					<SidebarItem
						key={chapter?.id}
						slug={course?.slug}
						chapter={chapter}
						index={index}
					/>
				))}
			</div>
		</div>
	);
};
