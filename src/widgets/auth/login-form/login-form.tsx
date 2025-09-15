import { useTranslations } from "next-intl";
import { FC } from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/shared/ui";

import { SignInGitHub } from "@/features/sign-in-github";
import { SignInGoogle } from "@/features/sign-in-google";

export const LoginForm: FC = ({}) => {
	const t = useTranslations("LoginPage");
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">{t("form.title")}</CardTitle>
				<CardDescription>{t("form.description")}</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-3">
				<SignInGitHub />
				<SignInGoogle />
			</CardContent>
		</Card>
	);
};
