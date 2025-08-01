"use client";

import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

import { MenuBar } from "./ui";

interface IEditorProps<T extends FieldValues> {
	field: ControllerRenderProps<T>;
	defaultValue?: string;
}

export const Editor = <T extends FieldValues>({
	field,
	defaultValue
}: IEditorProps<T>) => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			TextAlign.configure({ types: ["heading", "paragraph"] })
		],

		editorProps: {
			attributes: {
				class: "flex-1 overflow-auto min-h-[290px] p-4 rounded-t-lg prose prose-sm sm:prose lg:lg-prose-lg xl:prose-xl dark:prose-invert !w-full !max-w-none"
			}
		},

		content: field?.value
			? JSON.parse(field?.value)
			: `<p>${defaultValue || ""}</p>`,
		onUpdate: ({ editor }) => {
			const text = JSON.stringify(editor?.getJSON());
			field.onChange(text);
		},

		immediatelyRender: false
	});

	return (
		<div className="w-full border border-input rounded-lg overflow-hidden dark:bg-input/30 min-h-[340px] flex flex-col  h-full">
			<div className="flex-1 overflow-auto">
				<EditorContent editor={editor} />
			</div>

			<MenuBar editor={editor} />
		</div>
	);
};
