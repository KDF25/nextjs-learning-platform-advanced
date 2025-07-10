"use client";

import { CircleX, PenIcon, PlusCircle, VideoIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import { UploadedFileData } from "uploadthing/types";

import { Button, Card, FileUpload } from "@/shared/ui";

interface IVideoSectionProps {
	videoUrl?: string;
	onChange: ({
		videoUrl,
		videoKey
	}: {
		videoUrl: string;
		videoKey: string;
	}) => void;
}

export const VideoSection: FC<IVideoSectionProps> = ({
	videoUrl,
	onChange
}) => {
	const t = useTranslations("LessonForm.fields.video");
	const [isEditing, setIsEditing] = useState<boolean>(false);

	const handleVideoChange = (data: UploadedFileData) => {
		onChange({
			videoUrl: data.url,
			videoKey: data.key
		});
		setIsEditing(false);
	};

	return (
		<Card className="relative p-0 overflow-hidden h-64 sm:h-72 md:h-96 lg:h-[480px] xl:h-[600px]">
			<div className="font-medium flex items-center justify-between absolute top-4 right-4 z-20">
				<Button
					className="flex flex-row gap-1 w-[120px]"
					type="button"
					onClick={() => setIsEditing(!isEditing)}
				>
					{isEditing && (
						<>
							<CircleX size={12} />
							{t("buttons.cancel")}
						</>
					)}

					{!isEditing && !videoUrl && (
						<>
							<PlusCircle size={12} />
							{t("buttons.add")}
						</>
					)}

					{!isEditing && videoUrl && (
						<>
							<PenIcon size={12} />
							{t("buttons.edit")}
						</>
					)}
				</Button>
			</div>

			{!isEditing &&
				(!videoUrl ? (
					<div className="flex items-center justify-center h-full w-full">
						<VideoIcon size={40} />
					</div>
				) : (
					<div className="relative aspect-video h-[inherit] flex items-center justify-center">
						<video
							src={videoUrl}
							controls
							width="auto"
							className="p-4 h-[inherit]"
						></video>
					</div>
				))}

			{isEditing && (
				<div className="flex flex-col gap-2 p-2 h-full">
					<FileUpload
						endpoint="sectionVideo"
						onChange={(data) => {
							if (data?.url) {
								handleVideoChange(data);
							}
						}}
					/>
					<div className="text-xs text-muted-foreground text-center">
						{t("recommendation")}
					</div>
				</div>
			)}
		</Card>
	);
};
