"use client";

import { User } from "@prisma/client";
import { FC } from "react";

import { LangToggle, Logo, ThemeToggle } from "@/shared/ui";

import { authClient } from "@/entities/auth";

import { NavButtons, NavRoutes, UserMenu } from "./ui";

export const StudentPublicNavbar: FC = ({}) => {
	const { data, isPending } = authClient.useSession();
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-[backdrop-filter]:bg-background/60">
			<div className="container flex min-h-16 items-center mx-auto px-4 md:px-6 lg:px-8 gap-2 flex-row">
				<Logo />
				<nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
					<NavRoutes />
					<div className="flex flex-row gap-2 items-center">
						<LangToggle />
						<ThemeToggle />
						{!isPending && data?.user ? (
							<UserMenu user={data.user as User} />
						) : (
							<NavButtons />
						)}
					</div>
				</nav>
			</div>
		</header>
	);
};
