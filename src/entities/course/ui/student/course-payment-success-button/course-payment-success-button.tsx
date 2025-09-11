import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";
import { Button } from "@/shared/ui";

export const CoursePaymentSuccessButton: FC = ({}) => {
	const t = useTranslations("PaymentPage.success");
	return (
		<Button asChild>
			<Link href={ENUM_PATHS.DASHBOARD.ROOT}>
				<ArrowLeft size={16} />
				{t("button")}
			</Link>
		</Button>
	);
};
