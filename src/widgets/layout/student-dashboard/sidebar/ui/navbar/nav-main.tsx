"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from "@/shared/ui";

import { ISidebarItem } from "../../model";

interface INavMainProps {
	items: ISidebarItem[];
}

export const NavMain: FC<INavMainProps> = ({ items }) => {
	const t = useTranslations("SidebarStudent");
	return (
		<SidebarGroup>
			<SidebarGroupContent className="flex flex-col gap-2">
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton tooltip={item.title} asChild>
								<Link href={item.url}>
									{item.icon && <item.icon />}
									<span>{t(item.title)}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
};
