import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";
import { Badge, Button } from "@/shared/ui";

import { KeyFeatures } from "@/widgets/key-features";

export const HomePage: FC = async ({}) => {
	// "use server";
	// const session = await auth.api.getSession({
	// 	headers: await headers()
	// });

	const t = await getTranslations("HomePage");

	return (
		<>
			<section className="relative py-20">
				<div className="flex flex-col items-center text-center space-y-8 ">
					<Badge variant={"outline"}>{t("badge")}</Badge>
					<h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
						{t("title")}
					</h1>
					<p className="max-w-[700px] text-muted-foreground md:text-xl">
						{t("description")}
					</p>
					<div className="flex flex-col sm:flex-row gap-4 mt-8">
						<Button asChild size={"lg"}>
							<Link href={ENUM_PATHS.COURSES.ROOT}>
								{t("buttons.explore")}
							</Link>
						</Button>
						<Button asChild size={"lg"} variant={"outline"}>
							<Link href={ENUM_PATHS.LOGIN}>
								{t("buttons.login")}
							</Link>
						</Button>
					</div>
				</div>
			</section>
			<KeyFeatures />
		</>
	);
};
