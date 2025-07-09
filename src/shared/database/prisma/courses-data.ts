import { Prisma } from "@prisma/client";

export const COURSES = (userId: string): Prisma.CourseCreateInput[] => {
	return [
		{
			title: "Frontend с нуля до PRO",
			description:
				"Полный курс по современному фронтенду с акцентом на React, TypeScript и архитектуру.",
			imageUrl: "https://example.com/course-cover.png",
			imageKey: "course-cover.png",
			price: 9900,
			duration: 600,
			level: "Intermediate",
			category: "Development",
			smallDescription:
				"Освой React, TypeScript и построение архитектуры приложений.",
			slug: "frontend-pro",
			status: "Published",
			user: {
				connect: {
					id: userId
				}
			},
			chapters: {
				create: [
					{
						title: "Введение в фронтенд",
						position: 1,
						lessons: {
							create: [
								{
									title: "Что такое фронтенд?",
									description:
										"Быстрый обзор того, что такое фронтенд-разработка и где она используется.",
									position: 1,
									imageUrl:
										"https://example.com/lesson-1-cover.png",
									imageKey: "lesson-1-cover.png",
									videoUrl:
										"https://example.com/lesson-1-video.mp4",
									videoKey: "lesson-1-video.mp4"
								},
								{
									title: "HTML, CSS и JS — краткий экскурс",
									description:
										"Понимание основ трех ключевых технологий.",
									position: 2,
									imageUrl:
										"https://example.com/lesson-2-cover.png",
									imageKey: "lesson-2-cover.png",
									videoUrl:
										"https://example.com/lesson-2-video.mp4",
									videoKey: "lesson-2-video.mp4"
								}
							]
						}
					},
					{
						title: "Основы React",
						position: 2,
						lessons: {
							create: [
								{
									title: "Первый компонент",
									description:
										"Создание первого React-компонента и разбор JSX.",
									position: 1,
									imageUrl:
										"https://example.com/lesson-3-cover.png",
									imageKey: "lesson-3-cover.png",
									videoUrl:
										"https://example.com/lesson-3-video.mp4",
									videoKey: "lesson-3-video.mp4"
								},
								{
									title: "Состояние и события",
									description:
										"Работа с useState и обработка событий в React.",
									position: 2,
									imageUrl:
										"https://example.com/lesson-4-cover.png",
									imageKey: "lesson-4-cover.png",
									videoUrl:
										"https://example.com/lesson-4-video.mp4",
									videoKey: "lesson-4-video.mp4"
								}
							]
						}
					}
				]
			}
		}
	];
};
