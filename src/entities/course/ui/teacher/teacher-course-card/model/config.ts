import { Eye, Pencil, Trash } from "lucide-react";

import { ENUM_PATHS } from "@/shared/config";

import { IDropdownMenuItem } from "./types";

export const DROPDOWN_MENU_ITEMS_LIST = (
	courseId: string
): IDropdownMenuItem[] => [
	{
		name: "menu.edit",
		icon: Pencil,
		href: ENUM_PATHS.TEACHER.EDIT(courseId)
	},
	{
		name: "menu.preview",
		icon: Eye,
		href: ENUM_PATHS.COURSES.COURSE(courseId),
		needSeparator: true
	},
	{
		name: "menu.delete",
		icon: Trash,
		href: ENUM_PATHS.TEACHER.DELETE(courseId),
		className: "text-destructive"
	}
];
