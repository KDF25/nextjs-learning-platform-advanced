"use client";

import { useTranslations } from "next-intl";
import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { useIsMobile } from "@/shared/hooks";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	ToggleGroup,
	ToggleGroupItem
} from "@/shared/ui";

import { CHART_TOGGLE_LIST, ENUM_CHART_TOGGLE } from "./model";

const chartData = [
	{ date: "2024-04-01", enrollments: 222 },
	{ date: "2024-04-02", enrollments: 97 },
	{ date: "2024-04-03", enrollments: 167 },
	{ date: "2024-04-04", enrollments: 242 },
	{ date: "2024-04-05", enrollments: 373 },
	{ date: "2024-04-06", enrollments: 301 },
	{ date: "2024-04-07", enrollments: 245 },
	{ date: "2024-04-08", enrollments: 409 },
	{ date: "2024-04-09", enrollments: 59 },
	{ date: "2024-04-10", enrollments: 261 },
	{ date: "2024-04-11", enrollments: 327 },
	{ date: "2024-04-12", enrollments: 292 },
	{ date: "2024-04-13", enrollments: 342 },
	{ date: "2024-04-14", enrollments: 137 },
	{ date: "2024-04-15", enrollments: 120 },
	{ date: "2024-04-16", enrollments: 138 },
	{ date: "2024-04-17", enrollments: 446 },
	{ date: "2024-04-18", enrollments: 364 },
	{ date: "2024-04-19", enrollments: 243 },
	{ date: "2024-04-20", enrollments: 89 },
	{ date: "2024-04-21", enrollments: 137 },
	{ date: "2024-04-22", enrollments: 224 },
	{ date: "2024-04-23", enrollments: 138 },
	{ date: "2024-04-24", enrollments: 387 },
	{ date: "2024-04-25", enrollments: 215 },
	{ date: "2024-04-26", enrollments: 75 },
	{ date: "2024-04-27", enrollments: 383 },
	{ date: "2024-04-28", enrollments: 122 },
	{ date: "2024-04-29", enrollments: 315 },
	{ date: "2024-04-30", enrollments: 454 },
	{ date: "2024-05-01", enrollments: 165 },
	{ date: "2024-05-02", enrollments: 293 },
	{ date: "2024-05-03", enrollments: 247 },
	{ date: "2024-05-04", enrollments: 385 },
	{ date: "2024-05-05", enrollments: 481 },
	{ date: "2024-05-06", enrollments: 498 },
	{ date: "2024-05-07", enrollments: 388 },
	{ date: "2024-05-08", enrollments: 149 },
	{ date: "2024-05-09", enrollments: 227 },
	{ date: "2024-05-10", enrollments: 293 },
	{ date: "2024-05-11", enrollments: 335 },
	{ date: "2024-05-12", enrollments: 197 },
	{ date: "2024-05-13", enrollments: 197 },
	{ date: "2024-05-14", enrollments: 448 },
	{ date: "2024-05-15", enrollments: 473 },
	{ date: "2024-05-16", enrollments: 338 },
	{ date: "2024-05-17", enrollments: 499 },
	{ date: "2024-05-18", enrollments: 315 },
	{ date: "2024-05-19", enrollments: 235 },
	{ date: "2024-05-20", enrollments: 177 },
	{ date: "2024-05-21", enrollments: 82 },
	{ date: "2024-05-22", enrollments: 81 },
	{ date: "2024-05-23", enrollments: 252 },
	{ date: "2024-05-24", enrollments: 294 },
	{ date: "2024-05-25", enrollments: 201 },
	{ date: "2024-05-26", enrollments: 213 },
	{ date: "2024-05-27", enrollments: 420 },
	{ date: "2024-05-28", enrollments: 233 },
	{ date: "2024-05-29", enrollments: 78 },
	{ date: "2024-05-30", enrollments: 340 },
	{ date: "2024-05-31", enrollments: 178 },
	{ date: "2024-06-01", enrollments: 178 },
	{ date: "2024-06-02", enrollments: 470 },
	{ date: "2024-06-03", enrollments: 103 },
	{ date: "2024-06-04", enrollments: 439 },
	{ date: "2024-06-05", enrollments: 88 },
	{ date: "2024-06-06", enrollments: 294 },
	{ date: "2024-06-07", enrollments: 323 },
	{ date: "2024-06-08", enrollments: 385 },
	{ date: "2024-06-09", enrollments: 438 },
	{ date: "2024-06-10", enrollments: 155 },
	{ date: "2024-06-11", enrollments: 92 },
	{ date: "2024-06-12", enrollments: 492 },
	{ date: "2024-06-13", enrollments: 81 },
	{ date: "2024-06-14", enrollments: 426 },
	{ date: "2024-06-15", enrollments: 307 },
	{ date: "2024-06-16", enrollments: 371 },
	{ date: "2024-06-17", enrollments: 475 },
	{ date: "2024-06-18", enrollments: 107 },
	{ date: "2024-06-19", enrollments: 341 },
	{ date: "2024-06-20", enrollments: 408 },
	{ date: "2024-06-21", enrollments: 169 },
	{ date: "2024-06-22", enrollments: 317 },
	{ date: "2024-06-23", enrollments: 480 },
	{ date: "2024-06-24", enrollments: 132 },
	{ date: "2024-06-25", enrollments: 141 },
	{ date: "2024-06-26", enrollments: 434 },
	{ date: "2024-06-27", enrollments: 448 },
	{ date: "2024-06-28", enrollments: 149 },
	{ date: "2024-06-29", enrollments: 103 },
	{ date: "2024-06-30", enrollments: 446 }
];
const chartConfig = {
	enrollments: {
		label: "Enrollments",
		color: "var(--chart-1)"
	}
} satisfies ChartConfig;

export const DashboardChart: React.FC = () => {
	const t = useTranslations("AdminDashboardPage.chart");
	const isMobile = useIsMobile();
	const [timeRange, setTimeRange] = React.useState<ENUM_CHART_TOGGLE>(
		ENUM_CHART_TOGGLE.DAYS_90
	);

	React.useEffect(() => {
		if (isMobile) {
			setTimeRange(ENUM_CHART_TOGGLE.DAYS_7);
		}
	}, [isMobile]);

	const filteredData = chartData.filter((item) => {
		const date = new Date(item.date);
		const referenceDate = new Date("2024-04-30");
		let daysToSubtract = 90;
		if (timeRange === ENUM_CHART_TOGGLE.DAYS_30) {
			daysToSubtract = 30;
		} else if (timeRange === ENUM_CHART_TOGGLE.DAYS_7) {
			daysToSubtract = 7;
		}
		const startDate = new Date(referenceDate);
		startDate.setDate(startDate.getDate() - daysToSubtract);
		return date >= startDate;
	});

	return (
		<Card className="@container/card">
			<CardHeader>
				<CardTitle>{t("title")}</CardTitle>
				<CardDescription>
					<span className="hidden @[540px]/card:block">
						{t("description")}
					</span>
					<span className="@[540px]/card:hidden">
						{t("smallDescription")}
					</span>
				</CardDescription>
				<CardAction>
					<ToggleGroup
						type="single"
						value={timeRange}
						onValueChange={(value) =>
							setTimeRange(value as ENUM_CHART_TOGGLE)
						}
						variant="outline"
						className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
					>
						{CHART_TOGGLE_LIST.map((item) => (
							<ToggleGroupItem
								key={item.value}
								value={item.value}
								className="cursor-pointer"
							>
								{t(item.label)}
							</ToggleGroupItem>
						))}
					</ToggleGroup>
					<Select
						value={timeRange}
						onValueChange={(value) =>
							setTimeRange(value as ENUM_CHART_TOGGLE)
						}
					>
						<SelectTrigger
							className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
							size="sm"
							aria-label="Select a value"
						>
							<SelectValue placeholder={t("toggle.90d")} />
						</SelectTrigger>
						<SelectContent className="rounded-xl">
							{CHART_TOGGLE_LIST.map((item) => (
								<SelectItem
									key={item.value}
									value={item.value}
									className="rounded-lg cursor-pointer"
								>
									{t(item.label)}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</CardAction>
			</CardHeader>
			<CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
				<ChartContainer
					config={chartConfig}
					className="aspect-auto h-[250px] w-full"
				>
					<BarChart data={filteredData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="date"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={32}
							tickFormatter={(value) => {
								const date = new Date(value);
								return date.toLocaleDateString("en-US", {
									month: "short",
									day: "numeric"
								});
							}}
						/>
						<ChartTooltip
							cursor={false}
							defaultIndex={isMobile ? -1 : 10}
							content={
								<ChartTooltipContent
									labelFormatter={(value) =>
										new Date(value).toLocaleDateString(
											"en-US",
											{
												month: "short",
												day: "numeric"
											}
										)
									}
								/>
							}
						/>
						<Bar
							dataKey="enrollments"
							fill="var(--chart-1)"
							radius={[4, 4, 0, 0]}
							barSize={24}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};
