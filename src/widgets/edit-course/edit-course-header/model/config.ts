import { BasicInfo, CourseStructure } from "../ui";

import { ENUM_TAB_VALUES, ITabItem } from "./types";

export const TABS_LIST: ITabItem[] = [
	{
		value: ENUM_TAB_VALUES.BASIC_INFO,
		name: "tabs.basicInfo",
		content: BasicInfo
	},
	{
		value: ENUM_TAB_VALUES.COURSE_STRUCTURE,
		name: "tabs.courseStructure",
		content: CourseStructure
	}
];
