import Link from "next/link";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";

export const Logo: FC = ({}) => {
	return (
		<Link href={ENUM_PATHS.MAIN} className="flex items-center space-x-2">
			<span className="font-bold">MindShift</span>
		</Link>
	);
};
