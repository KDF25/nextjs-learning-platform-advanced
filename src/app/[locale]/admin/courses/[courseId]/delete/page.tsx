import { FC } from "react";

import { CourseIdDeletePage } from "@/page/admin";

interface IPageProps {
	params: Promise<{ courseId: string }>;
}

const Page: FC<IPageProps> = async ({ params }) => {
	return <CourseIdDeletePage {...await params} />;
};

export default Page;
