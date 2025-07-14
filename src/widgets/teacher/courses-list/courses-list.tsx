import { PlusCircleIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";
import { Button, InfoCardList } from "@/shared/ui";

import { GetAllTeacherCourses } from "@/entities/course";

import { CoursesCardList } from "./ui";

export const CoursesList: FC = async ({}) => {
	const t = await getTranslations("AdminCoursesPage");
	const courses = await GetAllTeacherCourses();
	return (
		<>
			{!courses?.length ? (
				<InfoCardList
					title={t("empty.title")}
					description={t("empty.description")}
					button={
						<Button asChild>
							<Link href={ENUM_PATHS.ADMIN.CREATE}>
								<PlusCircleIcon className="mr-2 h-4 w-4" />
								{t("buttons.create")}
							</Link>
						</Button>
					}
				/>
			) : (
				<CoursesCardList courses={courses} />
			)}
		</>
	);
};
