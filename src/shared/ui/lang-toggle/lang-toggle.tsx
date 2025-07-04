"use client";

import { Loader } from "lucide-react";
import { Locale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { FC, useTransition } from "react";

import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/shared/ui";

import { usePathname, useRouter } from "@/i18n/navigation";

export const LangToggle: FC = () => {
	const t = useTranslations("LanguageToggle");

	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();

	function onSelectChange(nextLocale: Locale) {
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{ locale: nextLocale }
			);
		});
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					{isPending ? (
						<Loader size={12} className="animate-spin" />
					) : (
						(params?.locale as string)?.toUpperCase()
					)}
					<span className="sr-only">Toggle language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => onSelectChange("en")}>
					{t("en")}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => onSelectChange("ru")}>
					{t("ru")}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
