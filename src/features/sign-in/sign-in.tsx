"use client";

import { GithubIcon, Loader } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";

import { Button } from "@/shared/ui";

import { useSignIn } from "@/entities/auth";

export const SignIn: FC = ({}) => {
	const t = useTranslations("LoginPage");

	const { isPending, signIn } = useSignIn();

	return (
		<Button
			variant="outline"
			className="w-full flex items-center justify-center gap-2"
			onClick={signIn}
			disabled={isPending}
		>
			{isPending ? (
				<>
					<Loader size={16} className="animate-spin" />
					{t("form.buttons.load")}
				</>
			) : (
				<>
					<GithubIcon size={16} />
					{t("form.buttons.github")}
				</>
			)}
		</Button>
	);
};
