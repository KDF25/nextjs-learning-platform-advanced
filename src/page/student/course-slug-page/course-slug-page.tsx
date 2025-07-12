import { FC } from "react";

interface ICourseSlugPageProps {
	slug: string;
}

export const CourseSlugPage: FC<ICourseSlugPageProps> = ({ slug }) => {
	return <div>CourseSlugPage {slug}</div>;
};
