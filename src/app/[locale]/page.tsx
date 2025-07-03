import { Locale } from "next-intl";
import { FC } from "react";

interface IPageProps {
	params: Promise<{
		locale: Locale;
	}>;
	// add your props here
}
const Page: FC<IPageProps> = ({}) => {
	return <div className="text-3xl bg-amber-600">Page</div>;
};

export default Page;
