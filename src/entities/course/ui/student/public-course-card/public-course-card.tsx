import { ArrowRight, School, TimerIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { ENUM_PATHS } from "@/shared/config";
import { Badge, Button, Card, CardContent } from "@/shared/ui";

import { TGetPublicCourse } from "../../../types";

interface IPublicCourseCardProps {
	course: TGetPublicCourse;
}

export const PublicCourseCard: FC<IPublicCourseCardProps> = ({ course }) => {
	const t = useTranslations("StudentCoursesPage");
	return (
		<Card className="group relative pt-0">
			<Badge className="absolute top-2 right-2">{course?.category}</Badge>
			<Image
				src={course?.imageUrl}
				alt={course?.title}
				width={600}
				height={400}
				className="w-full rounded-t-lg aspect-video h-full object-cover"
			/>
			<CardContent className="flex flex-col gap-4 relative">
				<Link
					className="font-medium text-lg line-clamp-2 hover: underline group-hover:text-primary transition-colors"
					href={ENUM_PATHS.COURSES.COURSE(course?.slug)}
				>
					{course?.title}
				</Link>

				<p className="line-clamp-2 text-sm text-muted-foreground leading-tight">
					{course?.smallDescription}
				</p>

				<div className="flex items-center gap-x-5">
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
					<Link href={ENUM_PATHS.COURSES.COURSE(course?.slug)}>
						{t("card.buttons.more")}
						<ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</Button>
			</CardContent>
		</Card>
	);
};
