import { headers } from "next/headers";
import { FC } from "react";

import { auth } from "@/entities/auth";
import { CourseTeacherService, TGetFullCourse } from "@/entities/course";

import { EditCourse } from "@/widgets/teacher";

interface ICourseIdEditPageProps {
	courseId: string;
}

export const CourseIdEditPage: FC<ICourseIdEditPageProps> = async ({
	courseId
}) => {
	const session = await auth.api.getSession({
		headers: await headers()
	});

	const course = (await CourseTeacherService.getById(
		courseId,
		session?.user?.id || ""
	)) as TGetFullCourse;
	return (
		<>
			<EditCourse course={course} />
		</>
	);
};
