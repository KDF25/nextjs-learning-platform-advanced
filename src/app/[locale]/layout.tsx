import { Locale, NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import "@/shared/styles/globals.css";

import Providers from "../__providers";

import { routing } from "@/i18n/routing";

type Props = {
	children: ReactNode;
	params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<Props, "children">) {
	const { locale } = await props.params;

	const t = await getTranslations({ locale, namespace: "LocaleLayout" });

	return {
		title: t("title")
	};
}

export default async function LocaleLayout({ children, params }: Props) {
	// Ensure that the incoming `locale` is valid
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	// Enable static rendering
	setRequestLocale(locale);

	return (
		<html className="h-full" lang={locale} suppressHydrationWarning>
			<body>
				<Providers>
					<NextIntlClientProvider>{children}</NextIntlClientProvider>
				</Providers>
			</body>
		</html>
	);
}
