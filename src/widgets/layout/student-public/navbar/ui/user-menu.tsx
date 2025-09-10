import { User } from "@prisma/client";
import { ChevronDownIcon, Loader, LogOutIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/shared/ui";

import { useSignOut } from "@/entities/auth";

import { USER_MENU_ITEMS_LIST } from "../model";

interface IUserMenu {
	user: User;
}

export const UserMenu: FC<IUserMenu> = ({ user: { name, email, image } }) => {
	const t = useTranslations("Navbar");

	const { isPending, signOut } = useSignOut();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-auto hover:bg-transparent">
					<Avatar>
						<AvatarImage src={image || ""} alt="Profile image" />
						<AvatarFallback>
							{name ? name[0] : email?.split("@")[0]}
						</AvatarFallback>
					</Avatar>
					<ChevronDownIcon
						size={16}
						className="opacity-60"
						aria-hidden="true"
					/>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="max-w-64" align="end">
				<DropdownMenuLabel className="flex min-w-0 flex-col">
					<span className="text-foreground truncate text-sm font-medium">
						{name ? name : email?.split("@")}
					</span>
					<span className="text-muted-foreground truncate text-xs font-normal">
						{email}
					</span>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					{USER_MENU_ITEMS_LIST.map((item) => (
						<DropdownMenuItem asChild key={item.name}>
							<Link href={item.href}>
								<item.icon
									size={16}
									className="opacity-60"
									aria-hidden="true"
								/>
								<span>{t(item.name)}</span>
							</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={signOut}>
					{isPending ? (
						<Loader size={16} className="animate-spin" />
					) : (
						<LogOutIcon
							size={16}
							className="opacity-60"
							aria-hidden="true"
						/>
					)}
					<span>{t("buttons.logout")}</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
