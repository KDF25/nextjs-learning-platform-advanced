import { DraggableSyntheticListeners } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { FC } from "react";

import { cn } from "@/shared/lib";

export enum ENUM_SORTABLE_ITEM_TYPE {
	CHAPTER = "chapter",
	LESSON = "lesson"
}

interface ISortableItemProps {
	id: string;
	children: (listeners: DraggableSyntheticListeners) => React.ReactNode;
	className?: string;
	data?: {
		type: ENUM_SORTABLE_ITEM_TYPE;
		chapterId?: string;
	};
}

export const SortableItem: FC<ISortableItemProps> = ({
	id,
	children,
	className,
	data
}) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging
	} = useSortable({ id: id, data: data });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition
	};

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...attributes}
			className={cn("touch-none", className, isDragging && "z-10")}
		>
			{children(listeners)}
		</div>
	);
};
