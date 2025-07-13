import { FC } from "react";

import { Navbar } from "@/widgets/layout";

interface ILayoutProps {
	children: React.ReactNode;
}

const MainLayout: FC<ILayoutProps> = ({ children }) => {
	return (
		<div>
			<Navbar />
			<main className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="mt-5 mb-32">{children}</div>
			</main>
		</div>
	);
};

export default MainLayout;
