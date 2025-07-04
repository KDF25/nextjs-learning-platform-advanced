import { ReactNode } from "react";

import { SidebarInset, SidebarProvider } from "@/shared/ui";

import { AppSidebar, SiteHeader } from "@/widgets/layout";

type Props = {
	children: ReactNode;
	// params: Promise<{ locale: Locale }>;
};

export default function AdminLayout({ children }: Props) {
	return (
		<SidebarProvider
			style={
				{
					"--sidebar-width": "calc(var(--spacing) * 72)",
					"--header-height": "calc(var(--spacing) * 12)"
				} as React.CSSProperties
			}
		>
			<AppSidebar variant="inset" />
			<SidebarInset>
				<SiteHeader />
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
