import { useTranslations } from "next-intl";
import { FC } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui";

import { TGetFullCourse } from "@/entities/course";

import { ENUM_TAB_VALUES, TABS_LIST } from "./model";

interface IEditCourseProps {
	course: TGetFullCourse;
}

export const EditCourse: FC<IEditCourseProps> = ({ course }) => {
	const t = useTranslations("EditCoursePage");
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-3xl font-bold ">
				{t("title")}:{" "}
				<span className="text-primary underline">{course?.title}</span>
			</h1>
			<Tabs defaultValue={ENUM_TAB_VALUES.BASIC_INFO} className="w-full">
				<TabsList className="grid grid-cols-2 w-full">
					{TABS_LIST.map((tab) => (
						<TabsTrigger
							key={tab.value}
							value={tab.value}
							className="cursor-pointer"
						>
							{t(tab.name)}
						</TabsTrigger>
					))}
				</TabsList>
				{TABS_LIST.map((tab) => (
					<TabsContent key={tab.value} value={tab.value}>
						<tab.content course={course} />
					</TabsContent>
				))}
			</Tabs>
		</div>
	);
};
