import { MoreVertical } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { FC } from "react";

import { cn } from "@/shared/lib";
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/shared/ui";

import { DROPDOWN_MENU_ITEMS_LIST } from "../model";

interface IMenuProps {
	courseId: string;
}

export const Menu: FC<IMenuProps> = ({ courseId }) => {
	const t = useTranslations("TeacherCoursesPage.card");
	const MENU = DROPDOWN_MENU_ITEMS_LIST(courseId);
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={"secondary"} size={"icon"}>
					<MoreVertical size={16} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-48">
				{MENU.map((item) => (
					<React.Fragment key={item?.name}>
						<DropdownMenuItem asChild>
							<Link
								href={item.href}
								className={cn(
									"flex items-center gap-2 flex-row",
									item?.className
								)}
							>
								<item.icon
									size={16}
									className={cn(item?.className)}
								/>
								{t(item.name)}
							</Link>
						</DropdownMenuItem>
						{item?.needSeparator && <DropdownMenuSeparator />}
					</React.Fragment>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
