import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { FC } from "react";

import { auth } from "@/shared/auth";
import { ENUM_PATHS } from "@/shared/config";

import { LoginForm } from "@/widgets/auth";

export const LoginPage: FC = async ({}) => {
	const t = await getTranslations("LoginPage");

	const session = await auth.api.getSession({
		headers: await headers()
	});

	if (session) {
		return redirect(ENUM_PATHS.MAIN);
	}

	return (
		<div className="flex w-full flex-col gap-6">
			<LoginForm />
			<p className="text-balance text-center text-xs text-muted-foreground">
				{t.rich("agreement.text", {
					terms: (chunks: React.ReactNode) => (
						<span className="hover:underline hover:text-primary">
							{chunks}
						</span>
					),
					privacy: (chunks: React.ReactNode) => (
						<span className="hover:underline hover:text-primary">
							{chunks}
						</span>
					)
				})}
			</p>
		</div>
	);
};
