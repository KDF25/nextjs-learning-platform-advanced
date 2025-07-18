import z from "zod";

import {
	ENUM_COURSE_CATEGORY,
	ENUM_COURSE_LEVELS,
	ENUM_COURSE_STATUS
} from "../types";

export const courseSchema = z.object({
	title: z
		.string()
		.min(3, { message: "CourseForm.fields.title.min" })
		.max(100, {
			message: "CourseForm.fields.title.max"
		}),

	description: z
		.string()
		.min(3, {
			message: "CourseForm.fields.description.min"
		})
		.max(1000, {
			message: "CourseForm.fields.description.max"
		}),

	imageUrl: z.string().min(1, {
		message: "CourseForm.fields.image.required"
	}),

	imageKey: z.string().min(1),

	price: z.coerce.number().min(1, {
		message: "CourseForm.fields.price.min"
	}),

	duration: z.coerce
		.number()
		.min(1, {
			message: "CourseForm.fields.duration.min"
		})
		.max(500, {
			message: "CourseForm.fields.duration.max"
		}),

	level: z.enum(ENUM_COURSE_LEVELS, {
		required_error: "CourseForm.fields.level.required"
	}),

	category: z.enum(ENUM_COURSE_CATEGORY, {
		message: "CourseForm.fields.category.required"
	}),

	smallDescription: z
		.string()
		.min(3, {
			message: "CourseForm.fields.smallDescription.min"
		})
		.max(200, {
			message: "CourseForm.fields.smallDescription.max"
		}),

	slug: z
		.string()
		.min(3, { message: "CourseForm.fields.slug.min" })
		.max(100, {
			message: "CourseForm.fields.slug.max"
		}),

	status: z.enum(ENUM_COURSE_STATUS, {
		required_error: "CourseForm.fields.status.required"
	})
});
