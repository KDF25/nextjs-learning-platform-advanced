"use client";

import { ArrowLeft, CheckIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC, useEffect } from "react";

import { ENUM_PATHS } from "@/shared/config";
import { useConfetti } from "@/shared/hooks";
import { Button, InfoCardList } from "@/shared/ui";

export const PaymentSuccessPage: FC = ({}) => {
	const { triggerConfetti } = useConfetti();
	const t = useTranslations("PaymentPage.success");

	useEffect(() => {
		triggerConfetti();
	}, [triggerConfetti]);

	return (
		<InfoCardList
			title={t("title")}
			button={<RenderButton />}
			description={t("description")}
			icon={CheckIcon}
			classNameIcon="text-green-500"
		/>
	);
};

const RenderButton = () => {
	const t = useTranslations("PaymentPage.success");
	return (
		<Button asChild>
			<Link href={ENUM_PATHS.MAIN}>
				<ArrowLeft size={16} />
				{t("button")}
			</Link>
		</Button>
	);
};
