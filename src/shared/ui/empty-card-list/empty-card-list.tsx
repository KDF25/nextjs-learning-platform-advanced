import { Ban } from "lucide-react";
import React, { FC } from "react";

interface Props {
	title: string;
	description: string;
	button: React.ReactNode;
}

export const EmptyCardList: FC<Props> = ({ title, description, button }) => {
	return (
		<div className="flex flex-col flex-1 h-full items-center justify-center rounded-md border-dashed border p-8 text-center animate-in fade-in-50">
			<div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
				<Ban className="size-10 text-primary" />
			</div>
			<h2 className="mt-4 text-2xl font-semibold">{title}</h2>
			<p className="mb-4 mt-2 text-center text-sm text-muted-foreground leading-tight">
				{description}
			</p>
			{button}
		</div>
	);
};
