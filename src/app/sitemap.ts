import { MetadataRoute } from "next";
import { Locale } from "next-intl";

import { ENUM_PATHS } from "@/shared/config";

import { host } from "@/config";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
	return [...getEntries("/"), ...getEntries("/pathnames")];
}

type Href = Parameters<typeof getPathname>[0]["href"];

const PAYMENT_PATHS: string[] = [
	ENUM_PATHS.PAYMENT.ROOT,
	ENUM_PATHS.PAYMENT.SUCCESS,
	ENUM_PATHS.PAYMENT.CANCEL
];

function getEntries(href: Href) {
	const pathname = typeof href === "string" ? href : href.pathname;

	// исключаем страницы оплаты
	if (PAYMENT_PATHS.includes(pathname)) return [];

	return routing.locales.map((locale) => ({
		url: getUrl(href, locale),
		alternates: {
			languages: Object.fromEntries(
				routing.locales.map((cur) => [cur, getUrl(href, cur)])
			)
		}
	}));
}

function getUrl(href: Href, locale: Locale) {
	const pathname = getPathname({ locale, href });
	return host + pathname;
}
