import z from "zod";

import { courseSchema } from "./course.validation";

export type CourseSchemaType = z.infer<typeof courseSchema>;
