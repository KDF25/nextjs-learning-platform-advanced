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
	DASHBOARD: {
		ROOT: "/dashboard",
		COURSE: (slug: string) => `/dashboard/${slug}`,
		LESSON: (slug: string, lessonId: string) =>
			`/dashboard/${slug}/${lessonId}`
	},
	TEACHER: {
		ROOT: "/teacher",
		COURSES: "/teacher/courses",
		CREATE: "/teacher/courses/create",
		COURSE: (courseId: string) => `/teacher/courses/${courseId}`,
		CHAPTER: (courseId: string, chapterId: string) =>
			`/teacher/courses/${courseId}/${chapterId}`,
		LESSON: (courseId: string, chapterId: string, lessonId: string) =>
			`/teacher/courses/${courseId}/${chapterId}/${lessonId}`,
		EDIT: (courseId: string) => `/teacher/courses/${courseId}/edit`,
		DELETE: (courseId: string) => `/teacher/courses/${courseId}/delete`
	}
} as const;
