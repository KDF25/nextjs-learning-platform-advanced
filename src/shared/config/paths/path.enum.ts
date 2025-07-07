export const ENUM_PATHS = {
	MAIN: "/",
	LOGIN: "/login",
	COURSES: {
		ROOT: "/courses",
		CREATE: "/courses/create",
		COURSE: (courseId: string) => `/courses/${courseId}`
	},
	ADMIN: {
		ROOT: "/admin",
		COURSES: "/admin/courses",
		CREATE: "/admin/courses/create",
		COURSE: (courseId: string) => `/admin/courses/${courseId}`,
		EDIT: (courseId: string) => `/admin/courses/${courseId}/edit`,
		DELETE: (courseId: string) => `/admin/courses/${courseId}/delete`
	}
} as const;
