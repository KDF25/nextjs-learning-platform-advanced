import { FC } from "react";

import { ChartAreaInteractive, SectionCards } from "@/widgets/layout";

export const DashboardPage: FC = ({}) => {
	return (
		<>
			<SectionCards />
			<div className="px-4 lg:px-6">
				<ChartAreaInteractive />
			</div>
			{/* <DataTable data={data} /> */}
		</>
	);
};
