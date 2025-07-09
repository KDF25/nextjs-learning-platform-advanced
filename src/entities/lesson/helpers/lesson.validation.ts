import z from "zod";

export const lessonSchema = z.object({
	title: z
		.string()
		.min(3, { message: "LessonForm.fields.title.min" })
		.max(100, {
			message: "LessonForm.fields.title.max"
		}),
	chapterId: z.string().min(1),
	description: z
		.string()
		.min(3, {
			message: "LessonForm.fields.description.min"
		})
		.max(1000, {
			message: "LessonForm.fields.description.max"
		})
		.optional(),

	imageUrl: z
		.string()
		.min(1, {
			message: "LessonForm.fields.image.required"
		})
		.optional(),

	imageKey: z.string().min(1).optional(),

	videoUrl: z
		.string()
		.min(1, {
			message: "LessonForm.fields.image.required"
		})
		.optional(),

	videoKey: z.string().min(1).optional()
});
