"use client";

import { useTranslations } from "next-intl";
import { ComponentPropsWithoutRef, FC } from "react";

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from "@/shared/ui";

import { ISidebarItem } from "../../model";

interface INavSecondaryProps
	extends ComponentPropsWithoutRef<typeof SidebarGroup> {
	items: ISidebarItem[];
}

export const NavSecondary: FC<INavSecondaryProps> = ({ items, ...props }) => {
	const t = useTranslations("SidebarStudent");
	return (
		<SidebarGroup {...props}>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton asChild>
								<a href={item.url}>
									<item.icon />
									<span>{t(item.title)}</span>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
};
