import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";
import { Button } from "@/shared/ui";

import { CourseCreate } from "@/widgets/teacher";

export const CreateCoursePage: FC = ({}) => {
	const t = useTranslations("CreateCoursePage");
	return (
		<>
			<div className="flex items-center gap-6">
				<Button asChild size={"icon"} variant="outline">
					<Link href={ENUM_PATHS.ADMIN.COURSES}>
						<ArrowLeft className="h-4 w-4" />
					</Link>
				</Button>
				<h1 className="text-2xl font-bold">{t("title")}</h1>
			</div>
			<CourseCreate />
		</>
	);
};
