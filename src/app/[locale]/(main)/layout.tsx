import { FC } from "react";

import { StudentPublicNavbar } from "@/widgets/layout";

interface ILayoutProps {
	children: React.ReactNode;
}

const MainLayout: FC<ILayoutProps> = ({ children }) => {
	return (
		<div>
			<StudentPublicNavbar />
			<main className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="mt-5 pb-32">
					<div className="flex flex-col gap-4">{children}</div>
				</div>
			</main>
		</div>
	);
};

export default MainLayout;
