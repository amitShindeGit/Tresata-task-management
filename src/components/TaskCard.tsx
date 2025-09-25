import { DeleteIcon, EditIcon } from "../utils/assets";
import { formatDate } from "../utils/utils";
import CollapsibleCardWrapper from "./display/CollapsibleCardWrapper";
import Tag from "./display/Tag";
import type { TaskCardProps } from "./types";
import { useState } from "react";

const getTaskStatusVariant = (status: string) => {
  switch (status) {
    case "in-progress":
      return "progress";
    case "pending":
      return "pending";
    case "completed":
      return "completed";
    default:
      return "progress";
  }
};

function TaskCard({ task, onDelete, onEdit }: TaskCardProps) {
  const { title, description, createdAt } = task;
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className="w-full p-4 bg-white flex flex-col border-b"
        style={{ position: "relative" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex items-center mb-3">
          <span className="w-8 h-8 rounded-full bg-white border border-[#034EA2] mr-3 flex-shrink-0 flex items-center justify-center text-[#034EA2] ">
            {title.charAt(0).toUpperCase()}
          </span>
          <div className="w-full flex justify-between">
            <span className="font-bold text-lg text-[#034EA2]">{title}</span>
            <Tag variant={getTaskStatusVariant(task?.status)} />
          </div>
        </div>

        <CollapsibleCardWrapper maxHeight={100} className="mt-2">
          <div className="pl-10 mb-1 text-gray-700">{description}</div>
        </CollapsibleCardWrapper>
        <div className="pl-10 mt-4 text-gray-500 text-base flex items-center justify-between relative">
          <span>{formatDate(createdAt)}</span>
          {hovered && (
            <div className="flex gap-4 absolute right-8">
              <button onClick={() => onEdit(task.id)}>
                <EditIcon />
              </button>
              <button onClick={() => onDelete(task.id)}>
                <DeleteIcon />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TaskCard;
