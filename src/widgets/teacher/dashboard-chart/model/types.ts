export enum ENUM_CHART_TOGGLE {
	DAYS_7 = "7d",
	DAYS_30 = "30d",
	DAYS_90 = "90d"
}

export interface IChartToggleItem {
	value: ENUM_CHART_TOGGLE;
	label: string;
}
