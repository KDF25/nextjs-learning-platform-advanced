import Link from "next/link";
import { FC } from "react";

import { SOCIAL_LINKS_LIST } from "../model";

export const SocialLinks: FC = ({}) => {
	return (
		<div className="flex space-x-4">
			{SOCIAL_LINKS_LIST.map((social) => (
				<Link
					key={social.label}
					href={social.href}
					className="text-muted-foreground hover:text-foreground transition-colors"
					aria-label={social.label}
				>
					<social.icon className="w-6 h-6" />
				</Link>
			))}
		</div>
	);
};
