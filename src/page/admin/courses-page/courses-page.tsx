import { PlusCircleIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import Link from "next/link";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";
import { Button } from "@/shared/ui";

import { auth } from "@/entities/auth";
import { CourseService } from "@/entities/course/api/course.service";

import { CoursesList } from "@/widgets/courses-list";

export const CoursesPage: FC = async ({}) => {
	const t = await getTranslations("AdminCoursesPage");
	const session = await auth.api.getSession({
		headers: await headers()
	});
	const courses = await CourseService.getTeacherCourses(
		session?.user?.id || ""
	);

	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">{t("title")}</h1>
				<Button asChild>
					<Link href={ENUM_PATHS.ADMIN.CREATE}>
						<PlusCircleIcon className="mr-2 h-4 w-4" />
						{t("buttons.create")}
					</Link>
				</Button>
			</div>
			<div>
				<h1>{t("subtitle")}</h1>
			</div>
			<CoursesList courses={courses} />
		</>
	);
};
