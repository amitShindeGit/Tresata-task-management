import React from "react";

type TagVariant = "pending" | "progress" | "completed";

interface TagProps {
  variant: TagVariant;
}

const Tag: React.FC<TagProps> = ({ variant }) => {
  switch (variant) {
    case "pending":
      return (
        <span className="inline-flex items-center">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-400 mr-1.5" />
          Pending
        </span>
      );
    case "progress":
      return (
        <span className="inline-flex items-center">
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 mr-1.5" />
          In Progress
        </span>
      );
    case "completed":
      return (
        <span className="inline-flex items-center">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-1.5" />
          Completed
        </span>
      );
    default:
      return null;
  }
};

export default Tag;
