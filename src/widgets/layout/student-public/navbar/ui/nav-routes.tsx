import { FC } from "react";

import { NAVBAR_ITEMS_LIST } from "../model";

import { NavItem } from "./nav-item";

export const NavRoutes: FC = ({}) => {
	return (
		<div className="flex items-center">
			{NAVBAR_ITEMS_LIST.map((item, index) => (
				<NavItem key={index} {...item} />
			))}
		</div>
	);
};
