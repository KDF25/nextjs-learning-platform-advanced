import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { prisma } from "../../../shared/database";

// If your Prisma file is located elsewhere, you can change the path

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: "postgresql" // or "mysql", "postgresql", ...etc
	}),
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID || "",
			clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
		}
	}
});
