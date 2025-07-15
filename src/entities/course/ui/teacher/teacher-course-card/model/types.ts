import { LucideIcon } from "lucide-react";

export interface IDropdownMenuItem {
	name: string;
	icon: LucideIcon;
	href: string;
	className?: string;
	needSeparator?: boolean;
}
