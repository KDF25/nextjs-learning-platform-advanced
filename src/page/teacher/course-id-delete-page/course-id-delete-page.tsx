"use client";

import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { toast } from "sonner";

import { ENUM_PATHS } from "@/shared/config";
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/shared/ui";

import { useCourseDelete } from "@/entities/course";

interface ICourseIdDeletePageProps {
	courseId: string;
}

export const CourseIdDeletePage: FC<ICourseIdDeletePageProps> = ({
	courseId
}) => {
	const t = useTranslations("DeleteCoursePage");

	const { isPending, deleteCourse } = useCourseDelete();
	const router = useRouter();

	const handleDelete = async () => {
		const response = await deleteCourse({
			courseId
		});
		if (response?.success) {
			toast.success(t("toast.success"));
			router.push(ENUM_PATHS.TEACHER.COURSES);
		} else {
			toast.error(t("toast.error"));
		}
	};

	return (
		<div className="max-w-xl mx-auto w-full mt-[15vh]">
			<Card>
				<CardHeader>
					<CardTitle>{t("title")}</CardTitle>
					<CardDescription>{t("description")}</CardDescription>
				</CardHeader>
				<CardContent className="flex justify-end gap-4">
					<Button asChild variant="outline">
						<Link href={ENUM_PATHS.TEACHER.COURSES}>
							{t("buttons.cancel")}
						</Link>
					</Button>
					<Button
						variant="destructive"
						disabled={isPending}
						onClick={handleDelete}
						className="gap-1"
					>
						{isPending ? (
							<>
								{t("buttons.deleting")}
								<Loader2 className="animate-spin" />
							</>
						) : (
							<>{t("buttons.delete")}</>
						)}
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};
