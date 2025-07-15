import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

import { ENUM_PATHS } from "@/shared/config";
import { SidebarInset, SidebarProvider } from "@/shared/ui";

import { auth } from "@/entities/auth";

import {
	StudentDashboardHeader,
	StudentDashboardSidebar
} from "@/widgets/layout";

type Props = {
	children: ReactNode;
};

export default async function AdminLayout({ children }: Props) {
	const session = await auth.api.getSession({ headers: await headers() });

	if (!session) {
		redirect(ENUM_PATHS.MAIN);
	}

	return (
		<SidebarProvider
			style={
				{
					"--sidebar-width": "calc(var(--spacing) * 72)",
					"--header-height": "calc(var(--spacing) * 12)"
				} as React.CSSProperties
			}
		>
			<StudentDashboardSidebar variant="inset" />
			<SidebarInset>
				<StudentDashboardHeader />
				<div className="flex flex-1 flex-col">
					<div className="@container/main flex flex-1 flex-col gap-2">
						<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
							{children}
						</div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
