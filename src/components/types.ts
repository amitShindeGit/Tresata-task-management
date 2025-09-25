import type React from "react";
import type { Task, TaskStatus } from "../utils/types";

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

export interface Option {
  id: number;
  label: string;
  value: string;
  element?: React.ReactNode;
}

type TagVariant = "pending" | "progress" | "completed";

export interface TagProps {
  variant: TagVariant;
}

export interface SubmitData {
  title: string;
  description: string;
  status?: TaskStatus;
}
export interface TaskFormProps {
  title?: string;
  description?: string;
  status?: TaskStatus;
  onSubmit: (data: SubmitData) => void;
  onCancel?: () => void;
}
