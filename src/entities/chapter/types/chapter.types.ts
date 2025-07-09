import z from "zod";

import { chapterSchema } from "../helpers";

export type ChapterSchemaType = z.infer<typeof chapterSchema>;
