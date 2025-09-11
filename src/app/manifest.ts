import { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";

import { ENUM_PATHS } from "@/shared/config";

export default async function manifest() {
	const t = await getTranslations("Manifest");

	return {
		name: t("name"),
		short_name: t("short_name"),
		description: t("description"),
		start_url: `/`,
		scope: `/`,
		display: "standalone",
		display_override: ["window-controls-overlay"],
		orientation: "portrait",
		theme_color: "#6366f1",
		background_color: "#ffffff",
		screenshots: [
			{
				src: "/screens/wide1.png",
				type: "image/jpeg",
				sizes: "800x583",
				form_factor: "wide"
			}
		],
		icons: [
			{ src: "/icons/icon-96.png", sizes: "96x96", type: "image/png" },
			{ src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
			{ src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" }
		],
		shortcuts: [
			{ name: t("shortcuts.courses"), url: ENUM_PATHS.COURSES.ROOT },
			{ name: t("shortcuts.dashboard"), url: ENUM_PATHS.DASHBOARD.ROOT }
		],
		related_applications: [
			{ platform: "webapp", url: process.env.NEXT_PUBLIC_APP_URL }
		],
		launch_handler: { client_mode: "focus-existing" },
		capture_links: "existing_client_event",
		url_handlers: [{ origin: process.env.NEXT_PUBLIC_APP_URL }]
	} as MetadataRoute.Manifest;
}
