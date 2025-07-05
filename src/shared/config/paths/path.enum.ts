export const ENUM_PATHS = {
	MAIN: "/",
	LOGIN: "/login",
	COURSES: {
		ROOT: "/courses",
		CREATE: "/courses/create",
		COURSE: "/courses/:id"
	},
	ADMIN: {
		ROOT: "/admin",
		COURSES: "/admin/courses",
		COURSE: "/admin/courses/:id"
	}
} as const;
