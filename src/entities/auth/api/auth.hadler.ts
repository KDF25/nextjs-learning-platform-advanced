"use server";

import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { auth } from "./auth";

export const authHandler = async () => {
	const session = await auth.api.getSession({ headers: await headers() });
	const userId = session?.user?.id;

	if (!userId) {
		throw new NextResponse("Unauthenticated", { status: 401 });
	}

	return userId;
};
