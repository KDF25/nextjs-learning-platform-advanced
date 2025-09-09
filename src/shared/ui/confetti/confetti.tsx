"use client";

import { FC, useEffect } from "react";

import { useConfetti } from "@/shared/hooks";

export const Confetti: FC = () => {
	const { triggerConfetti } = useConfetti();

	useEffect(() => {
		triggerConfetti();
	}, [triggerConfetti]);

	return null;
};
