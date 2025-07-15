import { FC } from "react";

import { DashboardLessonPage } from "@/page/student";

interface IPageProps {
	params: Promise<{ slug: string; lessonId: string }>;
}

const Page: FC<IPageProps> = async ({ params }) => {
	return <DashboardLessonPage {...await params} />;
};

export default Page;
