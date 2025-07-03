import { Locale } from "next-intl";
import { FC } from "react";

import { LoginPage } from "@/page/login-page";

// import { LoginPage } from "@/page/login-page";

interface IPageProps {
	params: Promise<{
		locale: Locale;
	}>;
	// add your props here
}
const Page: FC<IPageProps> = ({}) => {
	return <LoginPage />;
};

export default Page;
