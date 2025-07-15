import { FC } from "react";

import { GetCourseSidebarData } from "@/entities/course";

import { EnrollCourseSidebar } from "@/widgets/layout";

interface ILayoutProps {
	children: React.ReactNode;
	params: Promise<{ slug: string }>;
}

const Layout: FC<ILayoutProps> = async ({ children, params }) => {
	const { slug } = await params;
	const course = await GetCourseSidebarData(slug);
	return (
		<div className="flex flex-1">
			<div className="w-80 border-r border-border shirk-0">
				<EnrollCourseSidebar course={course} />
			</div>
			<div className="flex-1 overflow-hidden pl-6">{children}</div>
		</div>
	);
};

export default Layout;
