import type { Task } from "../utils/types";

export interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export interface CollapsibleCardWrapperProps {
  children: React.ReactNode;
  maxHeight?: number; // in px, default 200
  className?: string;
}
