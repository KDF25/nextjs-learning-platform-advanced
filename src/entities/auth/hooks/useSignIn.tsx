"use client";

import { useTranslations } from "next-intl";
import { useTransition } from "react";
import { toast } from "sonner";

import { authClient } from "../api";

export const useSignIn = () => {
	const t = useTranslations("LoginPage");

	const [isPending, startTransition] = useTransition();

	const signInGithub = async () => {
		startTransition(async () => {
			await authClient.signIn.social({
				provider: "github",
				callbackURL: "/",
				fetchOptions: {
					onSuccess: () => {
						toast.success(t("form.signInGithub.success"));
					},
					onError: (error) => {
						toast.error(t("form.signInGithub.error"));
						console.error("[Github sign in error]", error);
					}
				}
			});
		});
	};

	const signInGoogle = async () => {
		startTransition(async () => {
			await authClient.signIn.social({
				provider: "google",
				callbackURL: "/",
				fetchOptions: {
					onSuccess: () => {
						toast.success(t("form.signInGoogle.success"));
					},
					onError: (error) => {
						toast.error(t("form.signInGoogle.error"));
						console.error("[Google sign in error]", error);
					}
				}
			});
		});
	};

	return {
		isPending,
		signInGithub,
		signInGoogle
	};
};
