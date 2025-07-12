import { FC } from "react";

import { CourseSlugPage } from "@/page/student";

interface IPageProps {
	params: Promise<{ slug: string }>;
}

const Page: FC<IPageProps> = async ({ params }) => {
	return <CourseSlugPage {...await params} />;
};

export default Page;
