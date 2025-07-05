import z from "zod";

import {
	ENUM_COURSE_CATEGORY,
	ENUM_COURSE_LEVELS,
	ENUM_COURSE_STATUS
} from "./course.enum";

export const courseSchema = z.object({
	title: z
		.string()
		.min(3, { message: "CreateCoursePage.basicInfo.form.fields.title.min" })
		.max(100, {
			message: "CreateCoursePage.basicInfo.form.fields.title.max"
		}),

	description: z
		.string()
		.min(3, {
			message: "CreateCoursePage.basicInfo.form.fields.description.min"
		})
		.max(1000, {
			message: "CreateCoursePage.basicInfo.form.fields.description.max"
		}),

	fileKey: z.string().min(1, {
		message: "CreateCoursePage.basicInfo.form.fields.fileKey.required"
	}),

	price: z.coerce.number().min(1, {
		message: "CreateCoursePage.basicInfo.form.fields.price.min"
	}),

	duration: z.coerce
		.number()
		.min(1, {
			message: "CreateCoursePage.basicInfo.form.fields.duration.min"
		})
		.max(500, {
			message: "CreateCoursePage.basicInfo.form.fields.duration.max"
		}),

	level: z.enum(ENUM_COURSE_LEVELS, {
		required_error: "CreateCoursePage.basicInfo.form.fields.level.required"
	}),

	category: z.enum(ENUM_COURSE_CATEGORY, {
		message: "CreateCoursePage.basicInfo.form.fields.category.required"
	}),

	smallDescription: z
		.string()
		.min(3, {
			message:
				"CreateCoursePage.basicInfo.form.fields.smallDescription.min"
		})
		.max(200, {
			message:
				"CreateCoursePage.basicInfo.form.fields.smallDescription.max"
		}),

	slug: z
		.string()
		.min(3, { message: "CreateCoursePage.basicInfo.form.fields.slug.min" })
		.max(100, {
			message: "CreateCoursePage.basicInfo.form.fields.slug.max"
		}),

	status: z.enum(ENUM_COURSE_STATUS, {
		required_error: "CreateCoursePage.basicInfo.form.fields.status.required"
	})
});
