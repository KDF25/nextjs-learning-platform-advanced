"use client";

import { Select } from "@radix-ui/react-select";
import { Loader, PlusCircleIcon, SaveAll } from "lucide-react";
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
	Input,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Textarea
} from "@/shared/ui";

import {
	CourseSchemaType,
	ENUM_COURSE_CATEGORY,
	ENUM_COURSE_LEVELS,
	ENUM_COURSE_STATUS
} from "@/entities/course";

import { GenerateSlug } from "@/features/generate-slug";

import { ImageSection } from "./ui";

interface ICourseDataFormProps {
	form: UseFormReturn<CourseSchemaType>;
	onSubmit: (data: CourseSchemaType) => void;
	isPending: boolean;
	isEdit?: boolean;
}

export const CourseDataForm: FC<ICourseDataFormProps> = ({
	form,
	onSubmit,
	isPending,
	isEdit = false
}) => {
	const t = useTranslations("CourseForm");
	const { watch, setValue, control, handleSubmit } = form;
	const formState = watch();
	const handleGenerateSlug = (slug: string) => {
		setValue("slug", slug);
	};

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
					name="slug"
					control={control}
					render={({ field }) => (
						<FormItem className="w-full relative mb-0 pb-6">
							<FormLabel className="ml-2">
								{t("fields.slug.label")}
							</FormLabel>
							<div className="flex gap-4 items-end">
								<FormControl>
									<Input
										placeholder={t(
											"fields.slug.placeholder"
										)}
										{...field}
									/>
								</FormControl>
								<GenerateSlug
									title={formState?.title}
									onChange={handleGenerateSlug}
								/>
							</div>

							<FormMessage className="absolute left-2 bottom-1" />
						</FormItem>
					)}
				/>

				<FormField
					name="smallDescription"
					control={control}
					render={({ field }) => (
						<FormItem className="relative mb-0 pb-6">
							<FormLabel className="ml-2">
								{t("fields.smallDescription.label")}
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder={t(
										"fields.smallDescription.placeholder"
									)}
									className="min-h-[120px] resize-none"
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

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<FormField
						name="category"
						control={control}
						render={({ field }) => (
							<FormItem className="w-full relative mb-0 pb-6">
								<FormLabel className="ml-2">
									{t("fields.category.label")}
								</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger className="w-full">
											<SelectValue
												placeholder={t(
													"fields.category.placeholder"
												)}
											/>
										</SelectTrigger>
									</FormControl>

									<SelectContent>
										{ENUM_COURSE_CATEGORY.map(
											(category) => (
												<SelectItem
													key={category}
													value={category}
												>
													{category}
												</SelectItem>
											)
										)}
									</SelectContent>
								</Select>

								<FormMessage className="absolute left-2 bottom-1" />
							</FormItem>
						)}
					/>

					<FormField
						name="level"
						control={control}
						render={({ field }) => (
							<FormItem className="w-full relative mb-0 pb-6">
								<FormLabel className="ml-2">
									{t("fields.level.label")}
								</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger className="w-full">
											<SelectValue
												placeholder={t(
													"fields.level.placeholder"
												)}
											/>
										</SelectTrigger>
									</FormControl>

									<SelectContent>
										{ENUM_COURSE_LEVELS.map((category) => (
											<SelectItem
												key={category}
												value={category}
											>
												{category}
											</SelectItem>
										))}
									</SelectContent>
								</Select>

								<FormMessage className="absolute left-2 bottom-1" />
							</FormItem>
						)}
					/>

					<FormField
						name="price"
						control={control}
						render={({ field }) => (
							<FormItem className="relative mb-0 pb-6">
								<FormLabel className="ml-2">
									{t("fields.price.label")}
								</FormLabel>
								<FormControl>
									<Input
										type="number"
										placeholder={t(
											"fields.price.placeholder"
										)}
										{...field}
									/>
								</FormControl>
								<FormMessage className="absolute left-2 bottom-1" />
							</FormItem>
						)}
					/>

					<FormField
						name="duration"
						control={control}
						render={({ field }) => (
							<FormItem className="relative mb-0 pb-6">
								<FormLabel className="ml-2">
									{t("fields.duration.label")}
								</FormLabel>
								<FormControl>
									<Input
										type="number"
										placeholder={t(
											"fields.duration.placeholder"
										)}
										{...field}
									/>
								</FormControl>
								<FormMessage className="absolute left-2 bottom-1" />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					name="status"
					control={control}
					render={({ field }) => (
						<FormItem className="w-full relative mb-0 pb-6">
							<FormLabel className="ml-2">
								{t("fields.status.label")}
							</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}
							>
								<FormControl>
									<SelectTrigger className="w-full">
										<SelectValue
											placeholder={t(
												"fields.status.placeholder"
											)}
										/>
									</SelectTrigger>
								</FormControl>

								<SelectContent>
									{ENUM_COURSE_STATUS.map((category) => (
										<SelectItem
											key={category}
											value={category}
										>
											{category}
										</SelectItem>
									))}
								</SelectContent>
							</Select>

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
							{isEdit
								? t("buttons.creating")
								: t("buttons.creating")}
							<Loader size={16} className="animate-spin" />
						</>
					) : isEdit ? (
						<>
							{t("buttons.save")}
							<SaveAll size={16} />
						</>
					) : (
						<>
							{t("buttons.create")}
							<PlusCircleIcon size={16} />
						</>
					)}
				</Button>
			</form>
		</Form>
	);
};
