import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";
import { Button } from "@/shared/ui";

interface LayoutProps {
	children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	const t = useTranslations();
	return (
		<div className="relative flex min-h-svh flex-col items-center justify-center">
			<Button asChild className="absolute top-4 left-4" variant="outline">
				<Link href={ENUM_PATHS.MAIN}>
					<ArrowLeft size={16} />
					{t("common.buttons.back")}
				</Link>
			</Button>
			<div className="flex w-full max-w-sm flex-col gap-6">
				{children}
			</div>
		</div>
	);
};

export default Layout;
