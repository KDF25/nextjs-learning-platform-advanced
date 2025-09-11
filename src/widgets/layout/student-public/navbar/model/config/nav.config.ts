import { ENUM_PATHS } from "@/shared/config";

import { INavItem } from "../types/nav.types";

export const NAVBAR_ITEMS_LIST: INavItem[] = [
	{
		name: "path.main",
		href: ENUM_PATHS.MAIN
	},
	{
		name: "path.courses",
		href: ENUM_PATHS.COURSES.ROOT
	},
	{
		name: "path.user",
		href: ENUM_PATHS.DASHBOARD.ROOT
	}
];
