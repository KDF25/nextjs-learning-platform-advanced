import { PrismaClient } from "@prisma/client";

import { COURSES } from "./courses-data";

const database = new PrismaClient();

async function seeding_courses() {
	try {
		console.log("🌱 Seeding database courses");
		const userId = "HTM7QY5q4cgyUEe86KFwtXkWoKVdYWHk";
		const courses = COURSES(userId);
		for (const course of courses) {
			await database.course.create({ data: course });
		}

		console.log("✅ Database courses seeded");
	} catch (error) {
		console.log("❌ Error seeding database courses", error);
	} finally {
		await database.$disconnect();
	}
}

async function main() {
	await seeding_courses();
}

main();
