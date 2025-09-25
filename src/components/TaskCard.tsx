import { formatDate } from "../utils/utils";
import CollapsibleCardWrapper from "./display/CollapsibleCardWrapper";
import type { TaskCardProps } from "./types";

function TaskCard({ tasks }: TaskCardProps) {
  const { title, description, createdAt } = tasks[0];

  return (
    <>
      <div className="w-full p-4 bg-white flex flex-col border-b">
        <div className="flex items-center mb-3">
          <span className="w-8 h-8 rounded-full bg-white border border-[#034EA2] mr-3 flex-shrink-0 flex items-center justify-center text-[#034EA2] ">
            {title.charAt(0).toUpperCase()}
          </span>
          <span className="font-bold text-lg text-[#034EA2]">{title}</span>
        </div>

        <CollapsibleCardWrapper maxHeight={100} className="mt-2">
          <div className="pl-10 mb-1 text-gray-700">{description}</div>
        </CollapsibleCardWrapper>
        <div className="pl-10 mt-4 text-gray-500 text-base">
          {formatDate(createdAt)}
        </div>
      </div>
    </>
  );
}

export default TaskCard;
