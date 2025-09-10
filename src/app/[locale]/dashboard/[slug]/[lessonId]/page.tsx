import { FC, Suspense } from "react";

import { SkeletonLessonPage } from "@/entities/lesson";

import { DashboardLessonPage } from "@/page/student";

interface IPageProps {
	params: Promise<{ slug: string; lessonId: string }>;
}

const Page: FC<IPageProps> = async ({ params }) => {
	return (
		<Suspense fallback={<SkeletonLessonPage />}>
			<DashboardLessonPage {...await params} />
		</Suspense>
	);
};

export default Page;
