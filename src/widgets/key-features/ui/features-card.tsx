import { FC } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";

import { IFeaturesCard } from "../model";

export const FeaturesCard: FC<IFeaturesCard> = ({
	icon,
	title,
	description
}) => {
	return (
		<Card className="hover:shadow-lg transition-shadow">
			<CardHeader>
				<div className="text-4xl mb-4">{icon}</div>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-muted-foreground">{description}</p>
			</CardContent>
		</Card>
	);
};
