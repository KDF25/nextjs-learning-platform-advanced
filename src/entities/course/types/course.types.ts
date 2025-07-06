import z from "zod";

import { courseSchema } from "../helpers";

export type CourseSchemaType = z.infer<typeof courseSchema>;
