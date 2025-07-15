import { Ban, LucideIcon } from "lucide-react";
import React, { FC } from "react";

import { cn } from "@/shared/lib";

interface Props {
	title: string;
	description: string;
	button: React.ReactNode;
	icon?: LucideIcon;
	classNameIcon?: string;
}

export const InfoCardList: FC<Props> = ({
	title,
	description,
	button,
	icon: Icon = Ban,
	classNameIcon = ""
}) => {
	return (
		<div className="flex flex-col flex-1 h-full items-center justify-center rounded-md border-dashed border p-8 text-center animate-in fade-in-50 min-h-[400px]">
			<div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
				<Icon className={cn("size-10 text-primary", classNameIcon)} />
			</div>
			<h2 className="mt-4 text-2xl font-semibold">{title}</h2>
			<p className="mb-4 mt-2 text-center text-sm text-muted-foreground leading-tight">
				{description}
			</p>
			{button}
		</div>
	);
};
