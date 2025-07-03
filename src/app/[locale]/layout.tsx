import { clsx } from "clsx";
import { Locale, NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import "@/shared/styles/globals.css";

import Providers from "../__providers";

import { routing } from "@/i18n/routing";

type Props = {
	children: ReactNode;
	params: Promise<{ locale: Locale }>;
};

const inter = Inter({ subsets: ["latin"] });

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
			<body className={clsx(inter.className, "flex h-full flex-col")}>
				<Providers>
					<NextIntlClientProvider>{children}</NextIntlClientProvider>
				</Providers>
			</body>
		</html>
	);
}
