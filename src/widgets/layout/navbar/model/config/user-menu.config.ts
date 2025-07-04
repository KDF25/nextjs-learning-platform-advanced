import { BookOpenIcon, Home, LayoutDashboardIcon } from "lucide-react";

import { ENUM_PATHS } from "@/shared/config";

import { IUserMenuItem } from "../types";

export const USER_MENU_ITEMS_LIST: IUserMenuItem[] = [
	{
		icon: Home,
		name: "path.main",
		href: ENUM_PATHS.MAIN
	},
	{
		icon: BookOpenIcon,
		name: "path.courses",
		href: ENUM_PATHS.COURSES
	},
	{
		icon: LayoutDashboardIcon,
		name: "path.dashboard",
		href: ENUM_PATHS.DASHBOARD
	}
];
