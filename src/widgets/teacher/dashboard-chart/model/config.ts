import { ENUM_CHART_TOGGLE, IChartToggleItem } from "./types";

export const CHART_TOGGLE_LIST: IChartToggleItem[] = [
	{
		value: ENUM_CHART_TOGGLE.DAYS_7,
		label: "toggle.7d"
	},
	{
		value: ENUM_CHART_TOGGLE.DAYS_30,
		label: "toggle.30d"
	},
	{
		value: ENUM_CHART_TOGGLE.DAYS_90,
		label: "toggle.90d"
	}
];
