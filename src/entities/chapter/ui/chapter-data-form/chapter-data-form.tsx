"use client";

import { Loader, PlusCircleIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { UseFormReturn } from "react-hook-form";

import {
	Button,
	DialogFooter,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from "@/shared/ui";

import { ChapterSchemaType } from "@/entities/chapter";

interface IChapterDataFormProps {
	form: UseFormReturn<ChapterSchemaType>;
	onSubmit: (data: ChapterSchemaType) => void;
	isPending: boolean;
}

export const ChapterDataForm: FC<IChapterDataFormProps> = ({
	form,
	onSubmit,
	isPending
}) => {
	const t = useTranslations("ChapterForm");
	const { control, handleSubmit } = form;

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					name="name"
					control={control}
					render={({ field }) => (
						<FormItem className="w-full relative mb-0 pb-6">
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

				<DialogFooter>
					<Button
						type="submit"
						disabled={isPending}
						className="gap-1"
					>
						{isPending ? (
							<>
								{t("buttons.creating")}
								<Loader size={16} className="animate-spin" />
							</>
						) : (
							<>
								{t("buttons.create")}
								<PlusCircleIcon size={16} />
							</>
						)}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};
