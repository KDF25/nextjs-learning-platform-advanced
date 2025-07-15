import { BookIcon } from "lucide-react";
import { FC } from "react";

interface IVideoPlayerProps {
	videoUrl: string;
	imageUrl?: string;
}

export const VideoPlayer: FC<IVideoPlayerProps> = ({ videoUrl, imageUrl }) => {
	if (!videoUrl) {
		return (
			<div className="aspect-video bg-muted rounded-lg flex flex-col items-center justify-center">
				<BookIcon className="size-16 text-primary mx-auto" />
				<p>This lesson does not have a video</p>
			</div>
		);
	}

	return (
		<div className="aspect-video bg-muted rounded-lg relative overflow-hidden">
			<video
				controls
				width="auto"
				className="w-full h-full object-cover"
				poster={imageUrl}
			>
				<source src={videoUrl} type="video/mp4" />
				<source src={videoUrl} type="video/webm" />
				<source src={videoUrl} type="video/ogg" />
			</video>
		</div>
	);
};
