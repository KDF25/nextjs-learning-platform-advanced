import { useTranslations } from "next-intl";
import React, { FC } from "react";

import { formatPrice } from "@/shared/lib";
import { Card, CardContent } from "@/shared/ui";

import { TGetPublicCourseBySlug } from "../../types";

import { LEARN_ROW_LIST } from "./model";
import { IncludeRow, LearnRow } from "./ui";

interface ICoursePaymentCardProps {
	course: TGetPublicCourseBySlug;
	EnrollBtn: React.ReactNode;
}

export const CoursePaymentCard: FC<ICoursePaymentCardProps> = ({
	course,
	EnrollBtn
}) => {
	const t = useTranslations("UserCoursePage.paymentCard");
	const INCLUDE_ROW_LIST = t.raw("includes.parameters") as {
		title: string;
	}[];

	const PARSED_LEARN_ROW_LIST = LEARN_ROW_LIST(
		course,
		t as unknown as typeof useTranslations
	);

	return (
		<Card className="py-0">
			<CardContent className="p-6 flex flex-col gap-5">
				<div className="flex items-center justify-between gap-2">
					<span className="text-lg font-medium">
						{t("price.title")}
					</span>
					<span className="text-2xl font-bold text-primary">
						{formatPrice(course?.price || 0)}
					</span>
				</div>
				<div className="space-y-3 rounded-lg bg-muted p-4">
					<h4 className="font-medium ">{t("learn.title")}:</h4>
					{PARSED_LEARN_ROW_LIST.map((item) => (
						<LearnRow key={item.title} {...item} />
					))}
				</div>
				<div className="space-y-3">
					<h4>{t("includes.title")}:</h4>
					<ul className="space-y-2">
						{INCLUDE_ROW_LIST.map((item, index) => (
							<IncludeRow key={index} title={item.title} />
						))}
					</ul>
				</div>
				{EnrollBtn}
				<div className="flex flex-col gap-1 text-center items-center justify-center">
					<p className="text-sm text-muted-foreground">
						{t("moneyBack.title")}
					</p>
					<p className="text-sm text-muted-foreground">
						{t("moneyBack.description")}
					</p>
				</div>
			</CardContent>
		</Card>
	);
};
