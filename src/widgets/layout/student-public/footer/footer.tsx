import { useTranslations } from "next-intl";
import { FC } from "react";

import { Logo } from "@/shared/ui";

import { FOOTER_SECTIONS_LIST } from "./model";
import { FooterSection, SocialLinks } from "./ui";

export const StudentPublicFooter: FC = ({}) => {
	const t = useTranslations();
	return (
		<footer className="border-t border-border">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Main footer content */}
				<div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Brand section */}
					<div className="col-span-1 md:col-span-1 flex flex-col gap-2">
						<Logo />
						<p className="text-muted-foreground text-sm leading-relaxed mb-2">
							{t("Footer.text")}
						</p>
						<SocialLinks />
					</div>

					{/* Navigation sections */}
					{FOOTER_SECTIONS_LIST.map((section) => (
						<FooterSection key={section.title} section={section} />
					))}
				</div>

				{/* Bottom section */}
				<div className="border-t border-border py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
					<div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
						<p className="text-sm text-muted-foreground">
							© 2024 MindShift. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
