export const ENUM_PATHS = {
	MAIN: "/",
	LOGIN: "/login",
	PAYMENT: {
		ROOT: "/payment",
		SUCCESS: "/payment/success",
		CANCEL: "/payment/cancel"
	},
	COURSES: {
		ROOT: "/courses",
		CREATE: "/courses/create",
		COURSE: (slug: string) => `/courses/${slug}`
	},
	ADMIN: {
		ROOT: "/admin",
		COURSES: "/admin/courses",
		CREATE: "/admin/courses/create",
		COURSE: (courseId: string) => `/admin/courses/${courseId}`,
		CHAPTER: (courseId: string, chapterId: string) =>
			`/admin/courses/${courseId}/${chapterId}`,
		LESSON: (courseId: string, chapterId: string, lessonId: string) =>
			`/admin/courses/${courseId}/${chapterId}/${lessonId}`,
		EDIT: (courseId: string) => `/admin/courses/${courseId}/edit`,
		DELETE: (courseId: string) => `/admin/courses/${courseId}/delete`
	}
} as const;
