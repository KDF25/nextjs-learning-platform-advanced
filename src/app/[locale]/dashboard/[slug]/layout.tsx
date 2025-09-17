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
		<div className="lg:flex lg:flex-1 grid gap-10">
			<div className="lg:w-80 lg:border-r border-border shirk-0 md:w-100 w-85">
				<EnrollCourseSidebar course={course} />
			</div>
			<div className="lg:flex-1 overflow-hidden lg:pl-6 lg:mb-10 mb-30">
				{children}
			</div>
		</div>
	);
};

export default Layout;
