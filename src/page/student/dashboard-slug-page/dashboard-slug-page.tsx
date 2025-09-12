import { BookOpen, Clock, GraduationCap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";

import { GetCourseSidebarData } from "@/entities/course";

interface IDashboardSlugPageProps {
	slug: string;
}

export const DashboardSlugPage: FC<IDashboardSlugPageProps> = async ({
	slug
}) => {
	const course = await GetCourseSidebarData(slug);
	if (!course) {
		redirect(ENUM_PATHS.DASHBOARD.ROOT);
	}

	const firstLesson = course?.chapters?.[0]?.lessons?.[0];
	const t = await getTranslations("StudentDashboardCoursePage.empty");

	if (firstLesson) {
		redirect(ENUM_PATHS.DASHBOARD.LESSON(slug, firstLesson.id));
	}

	return (
		<div className="min-h-screen   dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
			<div className="max-w-md w-full text-center">
				{/* Animated icon container */}
				<div className="relative mb-8">
					<div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
						<BookOpen className="w-12 h-12 text-white" />
					</div>

					{/* Floating elements */}
					<div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 dark:bg-yellow-300 rounded-full flex items-center justify-center shadow-md animate-bounce delay-300">
						<GraduationCap className="w-4 h-4 text-yellow-800" />
					</div>

					<div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 dark:bg-green-300 rounded-full flex items-center justify-center shadow-md animate-bounce delay-700">
						<Clock className="w-3 h-3 text-green-800" />
					</div>
				</div>

				{/* Main content */}
				<div className="space-y-4">
					<h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
						{t("title")}
					</h2>

					<p className="text-slate-600 dark:text-slate-400 leading-relaxed">
						{t("description")}
					</p>
				</div>

				{/* Decorative elements */}
				<div className="absolute inset-0 pointer-events-none overflow-hidden">
					<div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
					<div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/5 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
				</div>
			</div>
		</div>
	);
};
