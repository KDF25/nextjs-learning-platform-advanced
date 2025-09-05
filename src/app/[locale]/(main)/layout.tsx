import { FC } from "react";

import { StudentPublicNavbar } from "@/widgets/layout";
import { StudentPublicFooter } from "@/widgets/layout/student-public/footer/footer";

interface ILayoutProps {
	children: React.ReactNode;
}

const MainLayout: FC<ILayoutProps> = ({ children }) => {
	return (
		<div>
			<StudentPublicNavbar />
			<main className="container mx-auto px-4 md:px-6 lg:px-8 min-h-[100vh]">
				<div className="mt-5 pb-32">
					<div className="flex flex-col gap-4">{children}</div>
				</div>
			</main>
			<StudentPublicFooter />
		</div>
	);
};

export default MainLayout;
