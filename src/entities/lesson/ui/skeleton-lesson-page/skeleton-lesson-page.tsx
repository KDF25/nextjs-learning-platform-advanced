import { FC } from "react";

import { Skeleton } from "@/shared/ui";

export const SkeletonLessonPage: FC = ({}) => {
	return (
		<div className="flex flex-col h-full pl-6">
			<div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
				<Skeleton className="w-full h-full" />
			</div>
			<div className="pt-4 pb-5">
				<Skeleton className="h-10 w-40" />
			</div>
			<div className="flex-1 space-y-6">
				<div className="space-y-2">
					<Skeleton className="h-8 w-1/2" />
					<Skeleton className="h-4 w-3/4" />
				</div>
				<div className="space-y-3">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-5/6" />
					<Skeleton className="h-4 w-4/6" />
				</div>
			</div>
		</div>
	);
};
