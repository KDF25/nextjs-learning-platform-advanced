import { FC } from "react";

interface ILayoutProps {
	children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<div>
			<main className="container mx-auto px-4 md:px-6 lg:px-8 min-h-screen w-full  flex items-center justify-center">
				<div className="mt-5 pb-32 min-w-[70vw] ">{children}</div>
			</main>
		</div>
	);
};

export default Layout;
