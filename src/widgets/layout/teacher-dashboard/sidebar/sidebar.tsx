"use client";

import { IconInnerShadowTop } from "@tabler/icons-react";
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

import { SIDEBAR_MAIN_USER_LIST, SIDEBAR_SECONDARY_USER_LIST } from "./model";
import { NavMain, NavSecondary, NavUser } from "./ui";

export function TeacherDashboardSidebar({
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
				<NavMain items={SIDEBAR_MAIN_USER_LIST} />
				<NavSecondary
					items={SIDEBAR_SECONDARY_USER_LIST}
					className="mt-auto"
				/>
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
		</Sidebar>
	);
}
