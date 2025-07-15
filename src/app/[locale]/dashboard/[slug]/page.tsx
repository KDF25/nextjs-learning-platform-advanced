import { FC } from "react";

import { DashboardSlugPage } from "@/page/student";

interface IPageProps {
	params: Promise<{ slug: string }>;
}

const Page: FC<IPageProps> = async ({ params }) => {
	return <DashboardSlugPage {...await params} />;
};

export default Page;
