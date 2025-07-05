import { PlusCircleIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";
import { Button } from "@/shared/ui";

export const CoursePage: FC = ({}) => {
	const t = useTranslations("AdminCoursesPage");
	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">{t("title")}</h1>
				<Button asChild>
					<Link href={ENUM_PATHS.COURSES.CREATE}>
						<PlusCircleIcon className="mr-2 h-4 w-4" />
						{t("buttons.create")}
					</Link>
				</Button>
			</div>
			<div>
				<h1>{t("subtitle")}</h1>
			</div>
		</>
	);
};
