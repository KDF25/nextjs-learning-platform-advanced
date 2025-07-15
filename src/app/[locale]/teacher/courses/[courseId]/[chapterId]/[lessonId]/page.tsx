import { FC } from "react";

import { LessonIdEditPage } from "@/page/teacher";

interface IPageProps {
	params: Promise<{ courseId: string; chapterId: string; lessonId: string }>;
}

const Page: FC<IPageProps> = async ({ params }) => {
	return <LessonIdEditPage {...await params} />;
};

export default Page;
