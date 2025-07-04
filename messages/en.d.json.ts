// This file is auto-generated by next-intl, do not edit directly.
// See: https://next-intl.dev/docs/workflows/typescript#messages-arguments

declare const messages: {
	"LocaleLayout": {
		"title": "Example App Router"
	},

	"Manifest": {
		"name": "Example App Router"
	},

	"common": {
		"buttons": {
			"back": "Back"
		}
	},

	"LoginPage": {
		"form": {
			"title": "Welcome back!",
			"description": "Login with your GitHub Account",
			"buttons": {
				"github": "Sign with GitHub",
				"load": "Loading ...",
				"email": "Continue with email"
			},
			"or": "Or continue with",
			"signIn": {
				"success": "Signed in with GitHub, you will be redirected ...",
				"error": "Failed to sign in with GitHub, please try again later."
			},
			"signOut": {
				"success": "Signed out successfully",
				"error": "Failed to sign out, please try again later."
			}
		},
		"agreement": {
			"text": "By signing up, you agree to our <terms>Terms of Service</terms> and <privacy>Privacy Policy</privacy>."
		}
	},

	"ThemeToggle": {
		"dark": "Dark",
		"light": "Light",
		"system": "System"
	},

	"LanguageToggle": {
		"en": "🇬🇧 English",
		"ru": "🇷🇺 Russian"
	},

	"Navbar": {
		"path": {
			"main": "Home",
			"courses": "Courses",
			"dashboard": "Dashboard"
		},

		"buttons": {
			"logout": "Logout",
			"login": "Login",
			"start": "Get Started"
		}
	},

	"HomePage": {
		"badge": "The Future of Online Education",
		"title": "Elevate your Learning Experience",
		"description": "Discover a new way to learn with our modern, interactive learning management system. Take control of your learning experience, track your progress, and stay up-to-date with the latest information.",
		"buttons": {
			"explore": "Explore Courses",
			"login": "Sign In"
		},

		"keyFeatures": [
			{
				"icon": "📚",
				"title": "Comprehensive Courses",
				"description": "Access a wide range of carefully curated courses designed by industry experts."
			},
			{
				"icon": "🎮",
				"title": "Interactive Learning",
				"description": "Engage with interactive content, quizzes, and assignments to enhance your learning experience."
			},
			{
				"icon": "📊",
				"title": "Progress Tracking",
				"description": "Monitor your progress and achievements with detailed analytics and personalized dashboards."
			},
			{
				"icon": "👥",
				"title": "Community Support",
				"description": "Join a vibrant community of learners and instructors to collaborate and share knowledge."
			}
		]
	},

	"AdminCoursesPage": {
		"title": "Your Courses",
		"subtitle": "Here you can create and manage your courses.",

		"buttons": {
			"create": "Create Course"
		}
	},

	"CreateCoursePage": {
		"title": "Create Course",

		"basicInfo": {
			"form": {
				"title": "Basic Information",
				"description": "Provide some basic information about your course.",

				"fields": {
					"title": {
						"label": "Title",
						"placeholder": "Enter course title",
						"min": "Title must be at least 3 characters",
						"max": "Title must be less than 100 characters"
					},
					"description": {
						"label": "Description",
						"placeholder": "Enter course description",
						"min": "Description must be at least 3 characters",
						"max": "Description must be less than 1000 characters"
					},
					"fileKey": {
						"label": "File",
						"placeholder": "Select file",
						"required": "File is required"
					},
					"price": {
						"label": "Price (in USD)",
						"placeholder": "Enter course price",
						"min": "Price must be at least 1"
					},
					"duration": {
						"label": "Duration (in hours)",
						"placeholder": "Enter course duration",
						"min": "Duration must be at least 1 hour",
						"max": "Duration must be less than 500 hours"
					},
					"level": {
						"label": "Level",
						"placeholder": "Select course level",
						"required": "Level is required"
					},
					"category": {
						"label": "Category",
						"placeholder": "Select course category",
						"required": "Category is required"
					},
					"smallDescription": {
						"label": "Small Description",
						"placeholder": "Enter course small description",
						"min": "Small description must be at least 3 characters",
						"max": "Small description must be less than 200 characters"
					},
					"slug": {
						"label": "Slug",
						"placeholder": "Enter course slug",
						"min": "Slug must be at least 3 characters",
						"max": "Slug must be less than 100 characters"
					},
					"status": {
						"label": "Status",
						"placeholder": "Select course status",
						"required": "Status is required"
					}
				},

				"buttons": {
					"generateSlug": "Generate Slug",
					"create": "Create Course"
				}
			}
		}
	}
};
export default messages;