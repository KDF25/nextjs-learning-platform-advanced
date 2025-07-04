import { toNextJsHandler } from "better-auth/next-js";

import { auth } from "@/entities/auth";

export const { POST, GET } = toNextJsHandler(auth);
