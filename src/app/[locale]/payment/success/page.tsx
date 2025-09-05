import { FC } from "react";

import { PaymentSuccessPage } from "@/page/student";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const Page: FC = ({}) => {
	return <PaymentSuccessPage />;
};

export default Page;
