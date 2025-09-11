import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

async function main() {
	await exportCourses();
}

async function exportCourses() {
	const courses = await prisma.course.findMany({
		include: {
			chapters: {
				include: {
					lessons: true
				}
			}
		}
	});

	const exportPath = path.join(__dirname, "courses-export.json");

	const formatted = courses.map((course) => ({
		title: course.title,
		description: course.description,
		imageUrl: course.imageUrl,
		imageKey: course.imageKey,
		price: course.price,
		duration: course.duration,
		level: course.level,
		category: course.category,
		smallDescription: course.smallDescription,
		slug: course.slug,
		status: course.status,
		user: {
			connect: { id: course.userId }
		},
		chapters: {
			create: course.chapters.map((chapter, chapterIndex) => ({
				title: chapter.title,
				position: chapterIndex + 1,
				lessons: {
					create: chapter.lessons.map((lesson, lessonIndex) => ({
						title: lesson.title,
						description: lesson.description,
						position: lessonIndex + 1,
						imageUrl: lesson.imageUrl,
						imageKey: lesson.imageKey,
						videoUrl: lesson.videoUrl,
						videoKey: lesson.videoKey
					}))
				}
			}))
		}
	}));

	fs.writeFileSync(exportPath, JSON.stringify(formatted, null, 2), "utf-8");

	console.log("✅ Курсы экспортированы в", exportPath);
}

main()
	.catch((e) => {
		console.error("❌ Ошибка при экспорте курсов:", e);
	})
	.finally(() => prisma.$disconnect());
