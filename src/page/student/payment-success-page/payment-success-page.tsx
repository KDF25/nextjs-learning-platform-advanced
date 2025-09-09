import { CheckIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FC } from "react";

import { Confetti, InfoCardList } from "@/shared/ui";

import { CoursePaymentSuccessButton } from "@/entities/course";

export const PaymentSuccessPage: FC = async ({}) => {
	const t = await getTranslations("PaymentPage.success");

	return (
		<>
			<Confetti />
			<InfoCardList
				title={t("title")}
				button={<CoursePaymentSuccessButton />}
				description={t("description")}
				icon={CheckIcon}
				classNameIcon="text-green-500"
			/>
		</>
	);
};
