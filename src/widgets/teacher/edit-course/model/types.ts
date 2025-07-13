import { FC } from "react";

import { TGetFullCourse } from "@/entities/course";

export interface ITabItem {
	value: string;
	name: string;
	content: FC<{ course: TGetFullCourse }>;
}

export const ENUM_TAB_VALUES = {
	BASIC_INFO: "basicInfo",
	COURSE_STRUCTURE: "courseStructure"
} as const;
