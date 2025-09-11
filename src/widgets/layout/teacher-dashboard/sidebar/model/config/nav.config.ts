import { IconDashboard } from "@tabler/icons-react";
import { HomeIcon, Tv2 } from "lucide-react";

import { ENUM_PATHS } from "@/shared/config";

import { IAdminNavItem } from "../types";

export const ADMIN_NAV_USER_LIST: IAdminNavItem[] = [
	{
		name: "path.main",
		icon: HomeIcon,
		href: ENUM_PATHS.MAIN
	},
	{
		name: "path.courses",
		icon: Tv2,
		href: ENUM_PATHS.TEACHER.COURSES
	},
	{
		name: "path.teacher",
		icon: IconDashboard,
		href: ENUM_PATHS.TEACHER.ROOT
	}
];
