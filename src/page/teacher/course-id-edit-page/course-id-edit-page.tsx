import { headers } from "next/headers";
import { FC } from "react";

import { auth } from "@/entities/auth";
import { CourseTeacherService, GetFullCourse } from "@/entities/course";

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
	)) as GetFullCourse;
	return (
		<>
			<EditCourse course={course} />
		</>
	);
};
