import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";
import { Button } from "@/shared/ui";

export const NavButtons: FC = ({}) => {
	const t = useTranslations("Navbar");
	return (
		<div className="flex flex-row gap-2 items-center">
			<Button asChild variant="secondary">
				<Link href={ENUM_PATHS.LOGIN}>{t("buttons.login")}</Link>
			</Button>
			<Button asChild>
				<Link href={ENUM_PATHS.LOGIN}>{t("buttons.start")}</Link>
			</Button>
		</div>
	);
};
