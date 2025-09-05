"use client";

import { IconDotsVertical, IconLogout } from "@tabler/icons-react";
import { Loader } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import {
	Avatar,
	AvatarFallback,
	AvatarImage
} from "@/shared/ui/shadcn-ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/shared/ui/shadcn-ui/dropdown-menu";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar
} from "@/shared/ui/shadcn-ui/sidebar";

import { authClient, useSignOut } from "@/entities/auth";

import { ADMIN_NAV_USER_LIST } from "../../model";

export function NavUser() {
	const { isMobile } = useSidebar();
	const t = useTranslations("Navbar");
	const { signOut, isPending: isPendingSignOut } = useSignOut();

	const { data: session, isPending } = authClient.useSession();

	if (isPending) {
		return null;
	}

	const user = session?.user;

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
						>
							<Avatar className="h-8 w-8 rounded-lg grayscale">
								<AvatarImage
									src={
										user?.image ||
										`https://avatar.vercel.sh/rauchg/${user?.email}`
									}
									alt={user?.name}
								/>
								<AvatarFallback className="rounded-lg">
									{user?.name[0]}
								</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-medium">
									{user?.name
										? user?.name
										: user?.email?.split("@")[0]}
								</span>
								<span className="text-muted-foreground truncate text-xs">
									{user?.email}
								</span>
							</div>
							<IconDotsVertical className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar className="h-8 w-8 rounded-lg">
									<AvatarImage
										src={
											user?.image ||
											`https://avatar.vercel.sh/rauchg/${user?.email}`
										}
										alt={user?.name}
									/>
									<AvatarFallback className="rounded-lg">
										{user?.name[0]}
									</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">
										{user?.name
											? user?.name
											: user?.email?.split("@")[0]}
									</span>
									<span className="text-muted-foreground truncate text-xs">
										{user?.email}
									</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							{ADMIN_NAV_USER_LIST.map((item) => (
								<DropdownMenuItem key={item.name} asChild>
									<Link href={item.href}>
										<item.icon className="mr-2 h-4 w-4" />
										{t(item.name)}
									</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={signOut}
							disabled={isPendingSignOut}
						>
							{isPendingSignOut ? (
								<Loader className="mr-2 h-4 w-4 animate-spin" />
							) : (
								<IconLogout className="mr-2 h-4 w-4" />
							)}
							{t("buttons.logout")}
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
