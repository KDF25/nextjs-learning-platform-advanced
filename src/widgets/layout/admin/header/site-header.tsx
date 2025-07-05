import { LangToggle, ThemeToggle } from "@/shared/ui";
import { Separator } from "@/shared/ui/shadcn-ui/separator";
import { SidebarTrigger } from "@/shared/ui/shadcn-ui/sidebar";

export function SiteHeader() {
	return (
		<header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
			<div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
				<SidebarTrigger className="-ml-1" />
				<Separator
					orientation="vertical"
					className="mx-2 data-[orientation=vertical]:h-4"
				/>
				<h1 className="text-base font-medium">MindShift</h1>
				<div className="ml-auto flex items-center gap-2">
					<LangToggle />
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}
