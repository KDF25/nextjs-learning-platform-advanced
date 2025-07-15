import { Course } from "@prisma/client";
import { ArrowRight, School, TimerIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";
import { Button, Card, CardContent } from "@/shared/ui";

import { Menu } from "./ui";

interface ITeacherCourseCardProps {
	course: Course;
}

export const TeacherCourseCard: FC<ITeacherCourseCardProps> = ({ course }) => {
	const t = useTranslations("TeacherCoursesPage");
	return (
		<Card className="group relative pt-0">
			<div className="absolute top-2 right-2">
				<Menu courseId={course?.id} />
			</div>
			<Image
				src={course?.imageUrl}
				alt={course?.title}
				width={600}
				height={400}
				className="w-full rounded-t-lg aspect-video h-full object-cover"
			/>
			<CardContent className="flex flex-col gap-4 relative">
				<Link
					href={ENUM_PATHS.TEACHER.COURSE(course?.id)}
					className="font-medium text-lg line-clamp-2 hover:underline group-hover:text-primary transition-colors"
				>
					{course?.title}
				</Link>

				<p className="line-clamp-2 text-sm text-muted-foreground leading-tight">
					{course?.smallDescription}
				</p>

				<div className="flex items-center justify gap-x-5">
					<div className="flex items-center gap-x-2">
						<TimerIcon className="rounded-md text-primary bg-primary/10 p-1 size-6" />
						<p className="text-sm text-muted-foreground">
							{course?.duration}h
						</p>
					</div>
					<div className="flex items-center gap-x-2">
						<School className="rounded-md text-primary bg-primary/10 p-1 size-6" />
						<p className="text-sm text-muted-foreground">
							{course?.level}
						</p>
					</div>
				</div>

				<Button asChild>
					<Link href={ENUM_PATHS.TEACHER.EDIT(course?.id)}>
						{t("card.buttons.edit")}
						<ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</Button>
			</CardContent>
		</Card>
	);
};
