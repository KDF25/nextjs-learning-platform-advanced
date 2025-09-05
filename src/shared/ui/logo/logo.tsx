import Link from "next/link";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";

export const Logo: FC = ({}) => {
	return (
		<Link href={ENUM_PATHS.MAIN}>
			<div className="flex items-center space-x-2">
				<div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
					<span className="text-white font-bold text-sm">M</span>
				</div>
				<span className="text-xl font-bold text-gray-900">
					MindShift
				</span>
			</div>
		</Link>
	);
};
