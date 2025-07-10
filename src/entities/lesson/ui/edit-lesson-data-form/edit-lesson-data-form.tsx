"use client";

import { Loader, SaveAll } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { UseFormReturn } from "react-hook-form";

import {
	Button,
	Editor,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from "@/shared/ui";

import { LessonSchemaType } from "../../types";

import { ImageSection, VideoSection } from "./ui";

interface ILessonDataFormProps {
	form: UseFormReturn<LessonSchemaType>;
	onSubmit: (data: LessonSchemaType) => void;
	isPending: boolean;
}

export const EditLessonDataForm: FC<ILessonDataFormProps> = ({
	form,
	onSubmit,
	isPending
}) => {
	const t = useTranslations("LessonForm");
	const { watch, setValue, control, handleSubmit } = form;
	const formState = watch();
	console.log(formState);

	return (
		<Form {...form}>
			<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
				<FormField
					name="title"
					control={control}
					render={({ field }) => (
						<FormItem className="relative mb-0 pb-6">
							<FormLabel className="ml-2">
								{t("fields.title.label")}
							</FormLabel>
							<FormControl>
								<Input
									placeholder={t("fields.title.placeholder")}
									{...field}
								/>
							</FormControl>
							<FormMessage className="absolute left-2 bottom-1" />
						</FormItem>
					)}
				/>

				<FormField
					name="description"
					control={control}
					render={({ field }) => (
						<FormItem className="relative mb-0 pb-6">
							<FormLabel className="ml-2">
								{t("fields.description.label")}
							</FormLabel>
							<FormControl>
								<Editor field={field} />
							</FormControl>
							<FormMessage className="absolute left-2 bottom-1" />
						</FormItem>
					)}
				/>

				<FormField
					name="imageKey"
					control={control}
					render={({}) => (
						<FormItem className="relative mb-0 pb-6">
							<FormLabel className="ml-2">
								{t("fields.image.label")}
							</FormLabel>
							<FormControl>
								<ImageSection
									onChange={({ imageUrl, imageKey }) => {
										setValue("imageUrl", imageUrl);
										setValue("imageKey", imageKey);
									}}
									imageUrl={formState?.imageUrl}
								/>
							</FormControl>
							<FormMessage className="absolute left-2 bottom-1" />
						</FormItem>
					)}
				/>

				<FormField
					name="videoKey"
					control={control}
					render={({}) => (
						<FormItem className="relative mb-0 pb-6">
							<FormLabel className="ml-2">
								{t("fields.video.label")}
							</FormLabel>
							<FormControl>
								<VideoSection
									onChange={({ videoUrl, videoKey }) => {
										setValue("videoUrl", videoUrl);
										setValue("videoKey", videoKey);
									}}
									videoUrl={formState?.videoUrl}
								/>
							</FormControl>
							<FormMessage className="absolute left-2 bottom-1" />
						</FormItem>
					)}
				/>

				<Button
					className="flex gap-2 items-center w-[150px] justify-between"
					disabled={isPending}
				>
					{isPending ? (
						<>
							{t("buttons.saving")}
							<Loader size={16} className="animate-spin" />
						</>
					) : (
						<>
							{t("buttons.save")}
							<SaveAll size={16} />
						</>
					)}
				</Button>
			</form>
		</Form>
	);
};
