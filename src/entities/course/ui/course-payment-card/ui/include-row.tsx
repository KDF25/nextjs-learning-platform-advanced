import { CheckIcon } from "lucide-react";
import { FC } from "react";

interface IIncludeRowProps {
	title: string;
}

export const IncludeRow: FC<IIncludeRowProps> = ({ title }) => {
	return (
		<li className="flex items-center gap-2">
			<div className="rounded-full bg-green-500/10 text-green-500">
				<CheckIcon className="size-3" />
			</div>
			<span>{title}</span>
		</li>
	);
};
