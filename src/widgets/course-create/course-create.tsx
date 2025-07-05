"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "@radix-ui/react-select";
import { PlusCircleIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { useForm } from "react-hook-form";

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
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
	ENUM_COURSE_STATUS,
	courseSchema
} from "@/entities/course";

import { GenerateSlug } from "@/features/generate-slug";

export const CourseCreate: FC = ({}) => {
	const t = useTranslations("CreateCoursePage.basicInfo.form");

	const form = useForm<CourseSchemaType>({
		resolver: zodResolver(courseSchema),
		defaultValues: {
			title: "",
			description: "",
			fileKey: "",
			price: 0,
			duration: 0,
			level: ENUM_COURSE_LEVELS[0],
			category: ENUM_COURSE_CATEGORY[0],
			smallDescription: "",
			slug: "",
			status: ENUM_COURSE_STATUS[0]
		}
	});

	const { watch, setValue, control } = form;
	const formState = watch();

	const onSubmit = (data: CourseSchemaType) => {
		console.log(data);
	};

	const handleGenerateSlug = (slug: string) => {
		setValue("slug", slug);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>{t("title")}</CardTitle>
				<CardDescription>{t("description")}</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						className="space-y-6"
						onSubmit={form.handleSubmit(onSubmit)}
					>
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
											placeholder={t(
												"fields.title.placeholder"
											)}
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
											className="min-h-[120px]"
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
										<Textarea
											placeholder={t(
												"fields.description.placeholder"
											)}
											className="min-h-[120px]"
											{...field}
										/>
									</FormControl>
									<FormMessage className="absolute left-2 bottom-1" />
								</FormItem>
							)}
						/>

						<FormField
							name="fileKey"
							control={control}
							render={({ field }) => (
								<FormItem className="relative mb-0 pb-6">
									<FormLabel className="ml-2">
										{t("fields.fileKey.label")}
									</FormLabel>
									<FormControl>
										<Input
											placeholder={t(
												"fields.fileKey.placeholder"
											)}
											{...field}
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
												{ENUM_COURSE_LEVELS.map(
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
											{ENUM_COURSE_STATUS.map(
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
						<Button>
							{t("buttons.create")}
							<PlusCircleIcon className="ml-2 h-4 w-4" />
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};
