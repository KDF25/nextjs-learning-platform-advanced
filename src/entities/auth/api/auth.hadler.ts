"use server";

import { headers } from "next/headers";
import { notFound } from "next/navigation";

import { auth } from "./auth";

export const authHandler = async () => {
	const session = await auth.api.getSession({ headers: await headers() });
	const userId = session?.user?.id;
	const email = session?.user?.email;

	if (!userId) {
		return notFound();
	}

	return { userId, email };
};
