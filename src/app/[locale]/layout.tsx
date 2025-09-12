import { Locale, NextIntlClientProvider, hasLocale } from "next-intl";
import {
	getMessages,
	getTranslations,
	setRequestLocale
} from "next-intl/server";
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

	const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "";
	const ogImage = `${baseUrl}/images/og-image.jpg`;

	return {
		title: {
			default: t("title"),
			template: `%s | ${t("siteName")}`
		},
		metadataBase: new URL(baseUrl),
		description: t("description"),
		keywords: t("keywords"),
		authors: [{ name: "Mindshift Team" }],
		creator: "Mindshift",
		publisher: "Mindshift",
		category: "Education",
		openGraph: {
			title: t("title"),
			description: t("description"),
			type: "website",
			locale: locale,
			alternateLocale: routing.locales.filter((l) => l !== locale),
			siteName: t("siteName"),
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: t("siteName")
				}
			]
		},
		twitter: {
			card: "summary_large_image",
			title: t("title"),
			description: t("description"),
			images: [ogImage]
		},
		icons: {
			icon: "/icons/icon-512.png"
		},
		alternates: {
			canonical: baseUrl,
			languages: {
				en: `${baseUrl}/en`,
				ru: `${baseUrl}/ru`
			}
		}
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

	// Load messages for the active locale on the server and pass to the provider
	const messages = await getMessages();

	return (
		<html className="h-full" lang={locale} suppressHydrationWarning>
			<body>
				<Providers>
					<NextIntlClientProvider
						messages={messages}
						locale={locale}
						timeZone={"UTC"}
					>
						{children}
					</NextIntlClientProvider>
				</Providers>
			</body>
		</html>
	);
}
