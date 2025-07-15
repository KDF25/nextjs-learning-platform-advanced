import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

import { INavItem } from "../model";

export const NavItem: FC<INavItem> = ({ name, href }) => {
	const t = useTranslations("Navbar");
	return (
		<Link
			href={href}
			className="text-sm font-medium transition-colors hover:text-primary"
		>
			{t(name)}
		</Link>
	);
};
