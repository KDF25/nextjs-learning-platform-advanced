import TextAlign from "@tiptap/extension-text-align";
import { generateHTML } from "@tiptap/html";
import { type JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import parse from "html-react-parser";
import { FC, useMemo } from "react";

interface IPreviewerProps {
	json: JSONContent;
}

export const Previewer: FC<IPreviewerProps> = ({ json }) => {
	const outPut = useMemo(() => {
		return generateHTML(json, [
			StarterKit,
			TextAlign.configure({ types: ["heading", "paragraph"] })
		]);
	}, [json]);

	return (
		<div className="prose dark:prose-invert prose-li:marker:text-primary">
			{parse(outPut)}
		</div>
	);
};
