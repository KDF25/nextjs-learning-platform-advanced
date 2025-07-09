export interface ISortableChapterProps {
	id: string;
	title: string;
	order: number;
	isOpen: boolean;
	lessons: ISortableLessonProps[];
}

export interface ISortableLessonProps {
	id: string;
	title: string;
	order: number;
}
