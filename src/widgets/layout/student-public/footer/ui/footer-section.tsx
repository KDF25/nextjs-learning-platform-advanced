import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

import { IFooterSection } from "../model";

interface IFooterSectionProps {
	section: IFooterSection;
}

export const FooterSection: FC<IFooterSectionProps> = ({ section }) => {
	const t = useTranslations();
	return (
		<div>
			<h2 className="text-sm font-semibold text-foreground mb-4">
				{t(section.title)}
			</h2>
			<div className="flex flex-col gap-2">
				{section.items.map((item) => (
					<Link
						key={item.label}
						href={item.href}
						className="text-sm text-muted-foreground hover:text-foreground transition-colors"
					>
						{t(item.label)}
					</Link>
				))}
			</div>
		</div>
	);
};
