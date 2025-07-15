import { FC } from "react";

import { ILearnRowProps } from "../model";

export const LearnRow: FC<ILearnRowProps> = ({
	title,
	parameter,
	icon: Icon
}) => {
	return (
		<div className="flex flex-col gap-3">
			<div className="flex items-center gap-3">
				<div className="flex items-center justify-center rounded-full bg-primary/10 text-primary size-8">
					<Icon className="size-4" />
				</div>
				<div>
					<p className="text-sm font-medium">{title}</p>
					<p className="text-sm text-muted-foreground">{parameter}</p>
				</div>
			</div>
		</div>
	);
};
