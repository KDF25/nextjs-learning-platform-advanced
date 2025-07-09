import z from "zod";

import { lessonSchema } from "../helpers";

export type LessonSchemaType = z.infer<typeof lessonSchema>;
