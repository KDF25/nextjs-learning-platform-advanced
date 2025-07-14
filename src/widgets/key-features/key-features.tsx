import { useTranslations } from "next-intl";
import { FC } from "react";

import { IFeaturesCard } from "./model";
import { FeaturesCard } from "./ui";

export const KeyFeatures: FC = ({}) => {
	const t = useTranslations("HomePage");
	const keyFeatures = t.raw("keyFeatures") as IFeaturesCard[];

	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-32">
			{keyFeatures?.map((feature, index) => (
				<FeaturesCard key={index} {...feature} />
			))}
		</section>
	);
};
