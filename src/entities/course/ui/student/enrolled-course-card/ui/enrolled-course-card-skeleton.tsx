import { FC } from "react";

import { Card, CardContent, Skeleton } from "@/shared/ui";

export const EnrolledCourseCardSkeleton: FC = ({}) => {
	return (
		<Card className="group relative py-0 gap-0 overflow-hidden">
			<div className="absolute top-2 right-2 z-10 flex items-center gap-2">
				<Skeleton className="h-6 w-24 rounded-full" />
			</div>
			<div className="w-full relative aspect-h-fit">
				<Skeleton className="w-full aspect-video h-[330px] object-cover rounded-none" />
			</div>
			<CardContent className="p-6 flex flex-col gap-4">
				<Skeleton className="h-6 w-3/4 mb-2 rounded" />
				<Skeleton className="h-4 w-full rounded" />
				<div className="flex items-center gap-x-5">
					<div className="flex items-center gap-x-2">
						<Skeleton className="size-6 rounded-md" />
						<Skeleton className="h-4 w-10 rounded" />
					</div>
					<div className="flex items-center gap-x-2">
						<Skeleton className="size-6 rounded-md" />
						<Skeleton className="h-4 w-10 rounded" />
					</div>
				</div>
				<div className="space-y-2">
					<div className="flex justify-between">
						<Skeleton className="h-3 w-16 rounded" />
						<Skeleton className="h-3 w-16 rounded" />
					</div>
					<Skeleton className="h-2 w-full rounded" />
					<Skeleton className="h-3 w-2/5 rounded" />
				</div>
				<Skeleton className="h-10 w-full rounded-md" />
			</CardContent>
		</Card>
	);
};
