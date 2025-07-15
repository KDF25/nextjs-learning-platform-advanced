"use client";

import { CircleX, ImageIcon, PenIcon, PlusCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC, useState } from "react";
import { UploadedFileData } from "uploadthing/types";

import { Button, Card, FileUpload } from "@/shared/ui";

interface IImageSectionProps {
	imageUrl?: string;
	onChange: ({
		imageUrl,
		imageKey
	}: {
		imageUrl: string;
		imageKey: string;
	}) => void;
}

export const ImageSection: FC<IImageSectionProps> = ({
	imageUrl,
	onChange
}) => {
	const t = useTranslations("CourseForm.fields.image");
	const [isEditing, setIsEditing] = useState<boolean>(false);

	const handleImageChange = (data: UploadedFileData) => {
		onChange({
			imageUrl: data.url,
			imageKey: data.key
		});
		setIsEditing(false);
	};

	return (
		<Card className="p-0 relative h-80 overflow-hidden">
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

					{!isEditing && !imageUrl && (
						<>
							<PlusCircle size={12} />
							{t("buttons.add")}
						</>
					)}

					{!isEditing && imageUrl && (
						<>
							<PenIcon size={12} />
							{t("buttons.edit")}
						</>
					)}
				</Button>
			</div>

			{!isEditing &&
				(!imageUrl ? (
					<div className="flex items-center justify-center h-full w-full">
						<ImageIcon size={40} />
					</div>
				) : (
					<div className="relative aspect-video h-[inherit]">
						<Image
							alt="Upload"
							fill
							className="object-contain p-4"
							src={imageUrl}
						/>
					</div>
				))}

			{isEditing && (
				<div className="flex flex-col gap-2 p-2 h-full">
					<FileUpload
						endpoint={"sectionImage"}
						onChange={(data) => {
							if (data?.url) {
								handleImageChange(data);
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
