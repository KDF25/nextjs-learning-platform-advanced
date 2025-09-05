"use client";

import {
	IconDashboard,
	IconHelp,
	IconInnerShadowTop,
	IconListDetails,
	IconSearch,
	IconSettings
} from "@tabler/icons-react";
import Link from "next/link";
import * as React from "react";

import { ENUM_PATHS } from "@/shared/config";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from "@/shared/ui";

import { NavMain, NavSecondary, NavUser } from "./ui";

const data = {
	navMain: [
		{
			title: "Dashboard",
			url: ENUM_PATHS.DASHBOARD.ROOT,
			icon: IconDashboard
		},
		{
			title: "Courses",
			url: ENUM_PATHS.COURSES.ROOT,
			icon: IconListDetails
		}
	],
	navSecondary: [
		{
			title: "Settings",
			url: "#",
			icon: IconSettings
		},
		{
			title: "Get Help",
			url: "#",
			icon: IconHelp
		},
		{
			title: "Search",
			url: "#",
			icon: IconSearch
		}
	]
};

export function StudentDashboardSidebar({
	...props
}: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:!p-1.5"
						>
							<Link href={ENUM_PATHS.MAIN}>
								<IconInnerShadowTop className="!size-5" />
								<span className="text-base font-semibold">
									MindShift
								</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
		</Sidebar>
	);
}
