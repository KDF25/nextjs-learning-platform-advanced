import { FC } from "react";

import { CourseIdEditPage } from "@/page/teacher";

interface IPageProps {
	params: Promise<{ courseId: string }>;
}

const Page: FC<IPageProps> = async ({ params }) => {
	return <CourseIdEditPage {...await params} />;
};

export default Page;
