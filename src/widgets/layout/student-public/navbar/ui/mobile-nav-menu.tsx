import { Menu } from "lucide-react";
import { FC } from "react";

import {
	Button,
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger
} from "@/shared/ui";

import { NAVBAR_ITEMS_LIST } from "../model";

import { NavButtons } from "./nav-buttons";
import { NavItem } from "./nav-item";

interface IMobileNavMenuProps {
	isAuth?: boolean;
}

export const MobileNavMenu: FC<IMobileNavMenuProps> = ({ isAuth = false }) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size={"icon"}>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent className="p-10 flex flex-col gap-10">
				<SheetTitle className="sr-only">Menu</SheetTitle>
				<SheetDescription className="sr-only">Menu</SheetDescription>
				<div className="grid gap-2">
					{NAVBAR_ITEMS_LIST.map((item, index) => (
						<NavItem key={index} {...item} />
					))}
				</div>
				{!isAuth && <NavButtons />}
			</SheetContent>
		</Sheet>
	);
};
