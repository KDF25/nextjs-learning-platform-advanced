"use client";

import { NextIntlClientProvider } from "next-intl";
import * as React from "react";

export function LanguageProvider({
	children,
	...props
}: React.ComponentProps<typeof NextIntlClientProvider>) {
	return (
		<NextIntlClientProvider {...props}>{children}</NextIntlClientProvider>
	);
}
