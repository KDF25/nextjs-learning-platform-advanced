import { FC } from "react";

import { Skeleton } from "../shadcn-ui";

export const VideoPlayerSkeleton: FC = ({}) => {
	return (
		<div className="aspect-video rounded-lg relative overflow-hidden">
			<Skeleton className="w-full h-full" />
		</div>
	);
};
