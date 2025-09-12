import { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";

import { ENUM_PATHS } from "@/shared/config";

export default async function manifest() {
	const t = await getTranslations("Manifest");

	return {
		name: t("name"),
		short_name: t("short_name"),
		description: t("description"),
		id: process.env.NEXT_PUBLIC_APP_URL ?? "/",
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
				sizes: "800x500",
				form_factor: "wide"
			},
			{
				src: "/screens/wide2.png",
				type: "image/jpeg",
				sizes: "800x500",
				form_factor: "wide"
			},
			{
				src: "/screens/wide3.png",
				type: "image/jpeg",
				sizes: "800x500",
				form_factor: "wide"
			},
			{
				src: "./screens/mobile1.jpg",
				type: "image/jpeg",
				sizes: "590x1280",
				form_factor: "narrow"
			},
			{
				src: "./screens/mobile2.jpg",
				type: "image/jpeg",
				sizes: "590x1280",
				form_factor: "narrow"
			}
		],
		icons: [
			{ src: "/icons/icon-96.png", sizes: "96x96", type: "image/png" },
			{ src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
			{ src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" }
		],
		shortcuts: [
			{
				name: t("shortcuts.courses"),
				url: ENUM_PATHS.COURSES.ROOT,
				icons: [
					{
						src: "/icons/icon-96.png",
						sizes: "96x96",
						type: "image/png"
					}
				]
			},
			{
				name: t("shortcuts.dashboard"),
				url: ENUM_PATHS.DASHBOARD.ROOT,
				icons: [
					{
						src: "/icons/icon-96.png",
						sizes: "96x96",
						type: "image/png"
					}
				]
			}
		],
		related_applications: [
			{ platform: "webapp", url: process.env.NEXT_PUBLIC_APP_URL }
		],
		launch_handler: { client_mode: "focus-existing" },
		capture_links: "existing_client_event",
		url_handlers: [{ origin: process.env.NEXT_PUBLIC_APP_URL }]
	} as MetadataRoute.Manifest;
}
