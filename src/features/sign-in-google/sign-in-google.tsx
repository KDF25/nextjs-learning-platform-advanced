"use client";

import { IconBrandGoogle } from "@tabler/icons-react";
import { Loader } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";

import { Button } from "@/shared/ui";

import { useSignIn } from "@/entities/auth";

export const SignInGoogle: FC = ({}) => {
	const t = useTranslations("LoginPage");

	const { isPending, signInGoogle: signIn } = useSignIn();

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
					<IconBrandGoogle size={16} />
					{t("form.buttons.github")}
				</>
			)}
		</Button>
	);
};
