import { Prisma } from "@prisma/client";

export const COURSES = (userId: string): Prisma.CourseCreateInput[] => {
	return [
		// {
		// 	title: "Frontend с нуля до PRO",
		// 	description:
		// 		`{"type":"doc","content":[{"type":"paragraph","attrs":{"textAlign":null},"content":[{"type":"text","text":"asdasdasd"}]}]}`,
		// 	imageUrl: "https://example.com/course-cover.png",
		// 	imageKey: "course-cover.png",
		// 	price: 9900,
		// 	duration: 600,
		// 	level: "Intermediate",
		// 	category: "Development",
		// 	smallDescription:
		// 		"Освой React, TypeScript и построение архитектуры приложений.",
		// 	slug: "frontend-pro",
		// 	status: "Published",
		// 	user: {
		// 		connect: {
		// 			id: userId
		// 		}
		// 	},
		// 	chapters: {
		// 		create: [
		// 			{
		// 				title: "Введение в фронтенд",
		// 				position: 1,
		// 				lessons: {
		// 					create: [
		// 						{
		// 							title: "Что такое фронтенд?",
		// 							description:
		// 								"Быстрый обзор того, что такое фронтенд-разработка и где она используется.",
		// 							position: 1,
		// 							imageUrl:
		// 								"https://example.com/lesson-1-cover.png",
		// 							imageKey: "lesson-1-cover.png",
		// 							videoUrl:
		// 								"https://example.com/lesson-1-video.mp4",
		// 							videoKey: "lesson-1-video.mp4"
		// 						},
		// 						{
		// 							title: "HTML, CSS и JS — краткий экскурс",
		// 							description:
		// 								"Понимание основ трех ключевых технологий.",
		// 							position: 2,
		// 							imageUrl:
		// 								"https://example.com/lesson-2-cover.png",
		// 							imageKey: "lesson-2-cover.png",
		// 							videoUrl:
		// 								"https://example.com/lesson-2-video.mp4",
		// 							videoKey: "lesson-2-video.mp4"
		// 						}
		// 					]
		// 				}
		// 			},
		// 			{
		// 				title: "Основы React",
		// 				position: 2,
		// 				lessons: {
		// 					create: [
		// 						{
		// 							title: "Первый компонент",
		// 							description:
		// 								"Создание первого React-компонента и разбор JSX.",
		// 							position: 1,
		// 							imageUrl:
		// 								"https://example.com/lesson-3-cover.png",
		// 							imageKey: "lesson-3-cover.png",
		// 							videoUrl:
		// 								"https://example.com/lesson-3-video.mp4",
		// 							videoKey: "lesson-3-video.mp4"
		// 						},
		// 						{
		// 							title: "Состояние и события",
		// 							description:
		// 								"Работа с useState и обработка событий в React.",
		// 							position: 2,
		// 							imageUrl:
		// 								"https://example.com/lesson-4-cover.png",
		// 							imageKey: "lesson-4-cover.png",
		// 							videoUrl:
		// 								"https://example.com/lesson-4-video.mp4",
		// 							videoKey: "lesson-4-video.mp4"
		// 						}
		// 					]
		// 				}
		// 			}
		// 		]
		// 	}
		// },
		// {
		// 	title: "TypeScript для продвинутых",
		// 	description: "Углубленное изучение TypeScript: дженерики, утилитарные типы, декораторы и архитектурные паттерны.",
		// 	imageUrl: "https://example.com/typescript-advanced-cover.png",
		// 	imageKey: "typescript-advanced-cover.png",
		// 	price: 12900,
		// 	duration: 480,
		// 	level: "Advanced",
		// 	category: "Development",
		// 	smallDescription:
		// 		"Мастерство TypeScript: от дженериков до архитектурных решений.",
		// 	slug: "typescript-advanced",
		// 	status: "Published",
		// 	user: {
		// 		connect: {
		// 			id: userId
		// 		}
		// 	},
		// 	chapters: {
		// 		create: [
		// 			{
		// 				title: "Продвинутые типы",
		// 				position: 1,
		// 				lessons: {
		// 					create: [
		// 						{
		// 							title: "Условные типы и infer",
		// 							description:
		// 								"Изучение conditional types и keyword infer для создания динамических типов.",
		// 							position: 1,
		// 							imageUrl:
		// 								"https://example.com/ts-conditional-cover.png",
		// 							imageKey: "ts-conditional-cover.png",
		// 							videoUrl:
		// 								"https://example.com/ts-conditional-video.mp4",
		// 							videoKey: "ts-conditional-video.mp4"
		// 						},
		// 						{
		// 							title: "Mapped types и Template literal types",
		// 							description:
		// 								"Создание новых типов на основе существующих с помощью mapped types.",
		// 							position: 2,
		// 							imageUrl:
		// 								"https://example.com/ts-mapped-cover.png",
		// 							imageKey: "ts-mapped-cover.png",
		// 							videoUrl:
		// 								"https://example.com/ts-mapped-video.mp4",
		// 							videoKey: "ts-mapped-video.mp4"
		// 						},
		// 						{
		// 							title: "Утилитарные типы: Pick, Omit, Record",
		// 							description:
		// 								"Глубокое погружение в встроенные utility types TypeScript.",
		// 							position: 3,
		// 							imageUrl:
		// 								"https://example.com/ts-utility-cover.png",
		// 							imageKey: "ts-utility-cover.png",
		// 							videoUrl:
		// 								"https://example.com/ts-utility-video.mp4",
		// 							videoKey: "ts-utility-video.mp4"
		// 						}
		// 					]
		// 				}
		// 			},
		// 			{
		// 				title: "Дженерики и ограничения",
		// 				position: 2,
		// 				lessons: {
		// 					create: [
		// 						{
		// 							title: "Generic constraints и keyof",
		// 							description:
		// 								"Ограничение дженериков и работа с keyof оператором.",
		// 							position: 1,
		// 							imageUrl:
		// 								"https://example.com/ts-generics-cover.png",
		// 							imageKey: "ts-generics-cover.png",
		// 							videoUrl:
		// 								"https://example.com/ts-generics-video.mp4",
		// 							videoKey: "ts-generics-video.mp4"
		// 						},
		// 						{
		// 							title: "Функциональные дженерики",
		// 							description:
		// 								"Создание типобезопасных функций высшего порядка.",
		// 							position: 2,
		// 							imageUrl:
		// 								"https://example.com/ts-func-gen-cover.png",
		// 							imageKey: "ts-func-gen-cover.png",
		// 							videoUrl:
		// 								"https://example.com/ts-func-gen-video.mp4",
		// 							videoKey: "ts-func-gen-video.mp4"
		// 						}
		// 					]
		// 				}
		// 			},
		// 			{
		// 				title: "Архитектурные паттерны",
		// 				position: 3,
		// 				lessons: {
		// 					create: [
		// 						{
		// 							title: "Builder Pattern в TypeScript",
		// 							description:
		// 								"Реализация паттерна Builder с использованием типобезопасности.",
		// 							position: 1,
		// 							imageUrl:
		// 								"https://example.com/ts-builder-cover.png",
		// 							imageKey: "ts-builder-cover.png",
		// 							videoUrl:
		// 								"https://example.com/ts-builder-video.mp4",
		// 							videoKey: "ts-builder-video.mp4"
		// 						},
		// 						{
		// 							title: "Декораторы и метапрограммирование",
		// 							description:
		// 								"Использование экспериментальных декораторов для метапрограммирования.",
		// 							position: 2,
		// 							imageUrl:
		// 								"https://example.com/ts-decorators-cover.png",
		// 							imageKey: "ts-decorators-cover.png",
		// 							videoUrl:
		// 								"https://example.com/ts-decorators-video.mp4",
		// 							videoKey: "ts-decorators-video.mp4"
		// 						}
		// 					]
		// 				}
		// 			}
		// 		]
		// 	}
		// }
		{
			title: "TypeScript для начинающих",
			description: `{"type":"doc","content":[{"type":"paragraph","attrs":{"textAlign":null},"content":[{"type":"text","text":"Пошаговое введение в TypeScript: типы, интерфейсы, generics и работа с современным JavaScript."}]}]}`,
			imageUrl: "https://example.com/course-cover.png",
			imageKey: "course-cover.png",
			price: 7900,
			duration: 480,
			level: "Beginner",
			category: "Development",
			smallDescription:
				"Изучи основы TypeScript и сделай свой JavaScript-код надёжным.",
			slug: "typescript-basics",
			status: "Published",
			user: {
				connect: { id: userId }
			},
			chapters: {
				create: [
					{
						title: "Введение в TypeScript",
						position: 1,
						lessons: {
							create: [
								{
									title: "Почему TypeScript?",
									description:
										"Зачем нужен TypeScript и в чем его преимущества.",
									position: 1,
									imageUrl:
										"https://example.com/lesson-1-cover.png",
									imageKey: "lesson-1-cover.png",
									videoUrl:
										"https://example.com/lesson-1-video.mp4",
									videoKey: "lesson-1-video.mp4"
								},
								{
									title: "Установка и настройка",
									description:
										"Как установить TypeScript и настроить проект.",
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
						title: "Основы типов",
						position: 2,
						lessons: {
							create: [
								{
									title: "Примитивные типы",
									description:
										"Разбираем string, number, boolean и null.",
									position: 1,
									imageUrl:
										"https://example.com/lesson-3-cover.png",
									imageKey: "lesson-3-cover.png",
									videoUrl:
										"https://example.com/lesson-3-video.mp4",
									videoKey: "lesson-3-video.mp4"
								},
								{
									title: "Интерфейсы и объекты",
									description:
										"Создание интерфейсов и работа с объектами.",
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
		},
		{
			title: "Node.js с нуля",
			description: `{"type":"doc","content":[{"type":"paragraph","attrs":{"textAlign":null},"content":[{"type":"text","text":"Практический курс по Node.js: от запуска сервера до создания API."}]}]}`,
			imageUrl: "https://example.com/course-cover.png",
			imageKey: "course-cover.png",
			price: 8500,
			duration: 540,
			level: "Beginner",
			category: "Backend",
			smallDescription:
				"Научись строить серверные приложения на Node.js.",
			slug: "nodejs-basics",
			status: "Published",
			user: {
				connect: { id: userId }
			},
			chapters: {
				create: [
					{
						title: "Знакомство с Node.js",
						position: 1,
						lessons: {
							create: [
								{
									title: "Что такое Node.js?",
									description:
										"Обзор среды выполнения JavaScript на сервере.",
									position: 1,
									imageUrl:
										"https://example.com/lesson-1-cover.png",
									imageKey: "lesson-1-cover.png",
									videoUrl:
										"https://example.com/lesson-1-video.mp4",
									videoKey: "lesson-1-video.mp4"
								},
								{
									title: "npm и управление пакетами",
									description:
										"Как использовать npm для установки зависимостей.",
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
						title: "Создание простого сервера",
						position: 2,
						lessons: {
							create: [
								{
									title: "HTTP-модуль",
									description:
										"Напишем простой сервер на чистом Node.js.",
									position: 1,
									imageUrl:
										"https://example.com/lesson-3-cover.png",
									imageKey: "lesson-3-cover.png",
									videoUrl:
										"https://example.com/lesson-3-video.mp4",
									videoKey: "lesson-3-video.mp4"
								},
								{
									title: "Express.js",
									description:
										"Облегчаем разработку с помощью Express.",
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
		},
		{
			title: "React Router в действии",
			description: `{"type":"doc","content":[{"type":"paragraph","attrs":{"textAlign":null},"content":[{"type":"text","text":"Изучи навигацию в React-приложениях на практике."}]}]}`,
			imageUrl: "https://example.com/course-cover.png",
			imageKey: "course-cover.png",
			price: 6900,
			duration: 360,
			level: "Intermediate",
			category: "Frontend",
			smallDescription:
				"Узнай, как организовать маршруты и переходы в React.",
			slug: "react-router-course",
			status: "Published",
			user: {
				connect: { id: userId }
			},
			chapters: {
				create: [
					{
						title: "Основы React Router",
						position: 1,
						lessons: {
							create: [
								{
									title: "Установка и настройка",
									description:
										"Подключаем React Router в проект.",
									position: 1,
									imageUrl:
										"https://example.com/lesson-1-cover.png",
									imageKey: "lesson-1-cover.png",
									videoUrl:
										"https://example.com/lesson-1-video.mp4",
									videoKey: "lesson-1-video.mp4"
								},
								{
									title: "Базовые маршруты",
									description:
										"Создаём страницы и навигацию.",
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
						title: "Продвинутые возможности",
						position: 2,
						lessons: {
							create: [
								{
									title: "Динамические роуты",
									description: "Работа с параметрами в URL.",
									position: 1,
									imageUrl:
										"https://example.com/lesson-3-cover.png",
									imageKey: "lesson-3-cover.png",
									videoUrl:
										"https://example.com/lesson-3-video.mp4",
									videoKey: "lesson-3-video.mp4"
								},
								{
									title: "Навигация по коду",
									description:
										"Программный переход между страницами.",
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
		},
		{
			title: "Git и GitHub для разработчиков",
			description: `{"type":"doc","content":[{"type":"paragraph","attrs":{"textAlign":null},"content":[{"type":"text","text":"Полное руководство по Git и GitHub: от основ до pull request."}]}]}`,
			imageUrl: "https://example.com/course-cover.png",
			imageKey: "course-cover.png",
			price: 5500,
			duration: 300,
			level: "Beginner",
			category: "Tools",
			smallDescription:
				"Освой систему контроля версий и работу с GitHub.",
			slug: "git-github-course",
			status: "Published",
			user: {
				connect: { id: userId }
			},
			chapters: {
				create: [
					{
						title: "Основы Git",
						position: 1,
						lessons: {
							create: [
								{
									title: "Что такое Git?",
									description:
										"История и ключевые возможности Git.",
									position: 1,
									imageUrl:
										"https://example.com/lesson-1-cover.png",
									imageKey: "lesson-1-cover.png",
									videoUrl:
										"https://example.com/lesson-1-video.mp4",
									videoKey: "lesson-1-video.mp4"
								},
								{
									title: "Первый репозиторий",
									description:
										"Создаём и инициализируем проект в Git.",
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
						title: "GitHub на практике",
						position: 2,
						lessons: {
							create: [
								{
									title: "Создание репозитория",
									description: "Загружаем проект на GitHub.",
									position: 1,
									imageUrl:
										"https://example.com/lesson-3-cover.png",
									imageKey: "lesson-3-cover.png",
									videoUrl:
										"https://example.com/lesson-3-video.mp4",
									videoKey: "lesson-3-video.mp4"
								},
								{
									title: "Pull requests",
									description:
										"Как отправить изменения и сделать ревью.",
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
		},
		{
			title: "Основы баз данных",
			description: `{"type":"doc","content":[{"type":"paragraph","attrs":{"textAlign":null},"content":[{"type":"text","text":"Базовый курс по реляционным базам данных и SQL-запросам."}]}]}`,
			imageUrl: "https://example.com/course-cover.png",
			imageKey: "course-cover.png",
			price: 7200,
			duration: 420,
			level: "Beginner",
			category: "Database",
			smallDescription:
				"Научись писать SQL-запросы и управлять базами данных.",
			slug: "database-basics",
			status: "Published",
			user: {
				connect: { id: userId }
			},
			chapters: {
				create: [
					{
						title: "Введение в базы данных",
						position: 1,
						lessons: {
							create: [
								{
									title: "Что такое база данных?",
									description:
										"Понимание реляционных БД и их структуры.",
									position: 1,
									imageUrl:
										"https://example.com/lesson-1-cover.png",
									imageKey: "lesson-1-cover.png",
									videoUrl:
										"https://example.com/lesson-1-video.mp4",
									videoKey: "lesson-1-video.mp4"
								},
								{
									title: "Основы SQL",
									description:
										"Знакомство с SELECT, INSERT, UPDATE и DELETE.",
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
						title: "Работа с таблицами",
						position: 2,
						lessons: {
							create: [
								{
									title: "Создание и изменение таблиц",
									description: "DDL-запросы в SQL.",
									position: 1,
									imageUrl:
										"https://example.com/lesson-3-cover.png",
									imageKey: "lesson-3-cover.png",
									videoUrl:
										"https://example.com/lesson-3-video.mp4",
									videoKey: "lesson-3-video.mp4"
								},
								{
									title: "Связи между таблицами",
									description:
										"Primary key, foreign key и связи один-ко-многим.",
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
