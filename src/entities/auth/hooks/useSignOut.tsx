"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

import { ENUM_PATHS } from "@/shared/config";

import { authClient } from "../api";

export const useSignOut = () => {
	const t = useTranslations("LoginPage");
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const signOut = async () => {
		startTransition(async () => {
			await authClient.signOut({
				fetchOptions: {
					onSuccess: () => {
						toast.success(t("form.signOut.success"));
						router.push(ENUM_PATHS.MAIN);
					},
					onError: (error) => {
						toast.error(t("form.signOut.error"));
						console.error("[Github sign out error]", error);
					}
				}
			});
		});
	};

	return {
		isPending,
		signOut
	};
};
