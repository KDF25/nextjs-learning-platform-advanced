import { GithubIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Input,
	Label
} from "@/shared/ui";

export const LoginForm: FC = ({}) => {
	const t = useTranslations("LoginPage");
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">{t("form.title")}</CardTitle>
				<CardDescription>{t("form.description")}</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-3">
				<Button variant="outline" className="w-full">
					<GithubIcon size={16} />
					{t("form.buttons.github")}
				</Button>
				<div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
					<span className="relative z-10 bg-card px-2 text-muted-foreground">
						{t("form.or")}
					</span>
				</div>
				<div className="grid gap-3">
					<div className="grid gap-1">
						<Label htmlFor="email" className="pl-1">
							Email
						</Label>
						<Input
							id="email"
							type="email"
							placeholder="m@example.com"
						/>
					</div>
					<Button>{t("form.buttons.email")}</Button>
				</div>
			</CardContent>
		</Card>
	);
};
