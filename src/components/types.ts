import type { Task } from "../utils/types";

export interface TaskCardProps {
  tasks: Task[];
}

export interface CollapsibleCardWrapperProps {
  children: React.ReactNode;
  maxHeight?: number; // in px, default 200
  className?: string;
}
