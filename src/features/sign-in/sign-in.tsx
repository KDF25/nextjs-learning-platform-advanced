"use client";

import { GithubIcon, Loader } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC, useTransition } from "react";
import { toast } from "sonner";

import { authClient } from "@/shared/auth";
import { Button } from "@/shared/ui";

export const SignIn: FC = ({}) => {
	const t = useTranslations("LoginPage");

	const [isPending, startTransition] = useTransition();

	const handleGithubSignIn = async () => {
		startTransition(async () => {
			await authClient.signIn.social({
				provider: "github",
				callbackURL: "/",
				fetchOptions: {
					onSuccess: () => {
						toast.success(t("form.signIn.success"));
					},
					onError: (error) => {
						toast.error(t("form.signIn.error"));
						console.error("[Github sign in error]", error);
					}
				}
			});
		});
	};

	return (
		<Button
			variant="outline"
			className="w-full flex items-center justify-center gap-2"
			onClick={handleGithubSignIn}
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
