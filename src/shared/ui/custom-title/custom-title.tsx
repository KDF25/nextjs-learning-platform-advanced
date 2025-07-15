import { FC } from "react";

interface ICustomTitleProps {
	title: string;
	description: string;
}

export const CustomTitle: FC<ICustomTitleProps> = ({ title, description }) => {
	return (
		<div className="flex flex-col space-y-2">
			<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
				{title}
			</h1>
			<p className="text-muted-foreground">{description}</p>
		</div>
	);
};
