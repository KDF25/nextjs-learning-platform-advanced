import { ArrowLeft, CircleX } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";
import { Button, InfoCardList } from "@/shared/ui";

export const PaymentCancelPage: FC = ({}) => {
	const t = useTranslations("PaymentPage.error");

	return (
		<InfoCardList
			title={t("title")}
			button={<RenderButton />}
			description={t("description")}
			icon={CircleX}
			classNameIcon="text-red-500"
		/>
	);
};

const RenderButton = () => {
	const t = useTranslations("PaymentPage.error");
	return (
		<Button asChild className="flex gap-2">
			<Link href={ENUM_PATHS.MAIN}>
				<ArrowLeft size={16} />
				{t("button")}
			</Link>
		</Button>
	);
};
