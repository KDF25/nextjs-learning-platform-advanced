"use client";

import {
	IconCamera,
	IconChartBar,
	IconDashboard,
	IconFileAi,
	IconFileDescription,
	IconFolder,
	IconHelp,
	IconInnerShadowTop,
	IconListDetails,
	IconSearch,
	IconSettings,
	IconUsers
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

import { NavMain, NavSecondary, NavUser } from "@/widgets/layout";

const data = {
	navMain: [
		{
			title: "Dashboard",
			url: ENUM_PATHS.TEACHER.ROOT,
			icon: IconDashboard
		},
		{
			title: "Courses",
			url: ENUM_PATHS.TEACHER.COURSES,
			icon: IconListDetails
		},
		{
			title: "Analytics",
			url: "#",
			icon: IconChartBar
		},
		{
			title: "Projects",
			url: "#",
			icon: IconFolder
		},
		{
			title: "Team",
			url: "#",
			icon: IconUsers
		}
	],
	navClouds: [
		{
			title: "Capture",
			icon: IconCamera,
			isActive: true,
			url: "#",
			items: [
				{
					title: "Active Proposals",
					url: "#"
				},
				{
					title: "Archived",
					url: "#"
				}
			]
		},
		{
			title: "Proposal",
			icon: IconFileDescription,
			url: "#",
			items: [
				{
					title: "Active Proposals",
					url: "#"
				},
				{
					title: "Archived",
					url: "#"
				}
			]
		},
		{
			title: "Prompts",
			icon: IconFileAi,
			url: "#",
			items: [
				{
					title: "Active Proposals",
					url: "#"
				},
				{
					title: "Archived",
					url: "#"
				}
			]
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
