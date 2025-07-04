"use client";

import { useTranslations } from "next-intl";
import { useTransition } from "react";
import { toast } from "sonner";

import { authClient } from "../api";

export const useSignIn = () => {
	const t = useTranslations("LoginPage");

	const [isPending, startTransition] = useTransition();

	const signIn = async () => {
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

	return {
		isPending,
		signIn
	};
};
