"use client";

import dynamic from "next/dynamic";

import { VideoPlayerSkeleton } from "./video-player-skeleton";

export const VideoPlayerClient = dynamic(
	() => import("./video-player").then((mod) => mod.VideoPlayer),
	{
		ssr: false,
		loading: () => <VideoPlayerSkeleton />
	}
);
