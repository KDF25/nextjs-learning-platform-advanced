"use client";

import { FC } from "react";
import { toast } from "sonner";
import { UploadedFileData } from "uploadthing/types";

import { cn } from "@/shared/lib";

import { ourFileRouter } from "@/app/api/uploadthing/core";

import { UploadDropzone } from "./uploadthing";

interface IFileUploadProps {
	onChange: (data?: UploadedFileData) => void;
	endpoint: keyof typeof ourFileRouter;
}

export const FileUpload: FC<IFileUploadProps> = ({ onChange, endpoint }) => {
	return (
		<UploadDropzone
			endpoint={endpoint}
			appearance={{
				container: ({ isDragActive }) =>
					cn(
						"h-full w-full p-6 rounded-xl border-2 border-dashed transition-colors duration-300",
						"bg-white text-zinc-800 border-zinc-300",
						"dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-700",
						isDragActive &&
							"border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
					),
				button: cn(
					"bg-emerald-500 hover:bg-emerald-700 cursor-pointer w-[200px]",
					"px-4 py-2 rounded-md transition-colors duration-200"
				),
				allowedContent: "!display-none"
			}}
			onClientUploadComplete={(res) => {
				onChange(res?.[0]);
			}}
			onUploadError={(error: Error) => {
				toast.error(`${error.message}`);
			}}
		/>
	);
};
