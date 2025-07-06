import z from "zod";

export const fileUploadSchema = z.object({
	fileName: z.string().min(1, {
		message: "common.upload.fields.fileName.required"
	}),
	contentType: z.string().min(1, {
		message: "common.upload.fields.contentType.required"
	}),
	size: z.number().min(1, {
		message: "common.upload.fields.size.required"
	}),
	isImage: z.boolean()
});
