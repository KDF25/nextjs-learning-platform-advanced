import z from "zod";

export const chapterSchema = z.object({
	name: z
		.string()
		.min(3, { message: "ChapterForm.fields.title.min" })
		.max(100, {
			message: "ChapterForm.fields.title.max"
		}),
	courseId: z.string().min(1)
});
