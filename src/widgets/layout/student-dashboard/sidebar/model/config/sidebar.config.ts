import {
	IconDashboard,
	IconHelp,
	IconListDetails,
	IconSearch,
	IconSettings
} from "@tabler/icons-react";

import { ENUM_PATHS } from "@/shared/config";

import { ISidebarItem } from "../types";

export const SIDEBAR_MAIN_USER_LIST: ISidebarItem[] = [
	{
		title: "main.dashboard",
		url: ENUM_PATHS.DASHBOARD.ROOT,
		icon: IconDashboard
	},
	{
		title: "main.courses",
		url: ENUM_PATHS.COURSES.ROOT,
		icon: IconListDetails
	}
];

export const SIDEBAR_SECONDARY_USER_LIST: ISidebarItem[] = [
	{
		title: "secondary.settings",
		url: "#",
		icon: IconSettings
	},
	{
		title: "secondary.help",
		url: "#",
		icon: IconHelp
	},
	{
		title: "secondary.search",
		url: "#",
		icon: IconSearch
	}
];
