import { SparkleIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";
import slugify from "slugify";

import { Button } from "@/shared/ui";

interface IGenerateSlugProps {
	title: string;
	onChange: (slug: string) => void;
}

export const GenerateSlug: FC<IGenerateSlugProps> = ({ title, onChange }) => {
	const t = useTranslations("CreateCoursePage.basicInfo.form");

	const handleOnClick = () => {
		const slug = slugify(title);
		onChange(slug);
		console.log(slug, title);
	};

	return (
		<Button
			onClick={handleOnClick}
			type="button"
			className="cursor-pointer"
		>
			{t("buttons.generateSlug")}
			<SparkleIcon className="ml-2 h-4 w-4" />
		</Button>
	);
};
