import { LucideIcon } from "lucide-react";
import { FC } from "react";

import { cn } from "@/shared/lib";
import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	buttonVariants
} from "@/shared/ui";

export interface ITeacherDashboardCardProps {
	header: string;
	parameter: string;
	title: string;
	description: string;
	icon: LucideIcon;
}

export const TeacherDashboardCard: FC<ITeacherDashboardCardProps> = ({
	header,
	parameter,
	title,
	description,
	icon: Icon
}) => {
	return (
		<Card className="@container/card">
			<CardHeader>
				<CardDescription>{header}</CardDescription>
				<CardTitle className="text-3xl font-semibold tabular-nums @[250px]/card:text-3xl">
					{parameter}
				</CardTitle>
				<CardAction
					className={cn(
						buttonVariants({ size: "icon", variant: "outline" }),
						"cursor-auto"
					)}
				>
					<Icon size={24} />
				</CardAction>
			</CardHeader>
			<CardFooter className="flex-col items-start gap-1">
				<div className="line-clamp-1 flex gap-2 font-medium  text-sm">
					{title}
				</div>
				<div className="text-muted-foreground text-xs">
					{description}
				</div>
			</CardFooter>
		</Card>
	);
};
