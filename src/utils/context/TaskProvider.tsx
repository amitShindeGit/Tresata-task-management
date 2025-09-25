// Core imports
import { nanoid } from "nanoid";
import { useState, useEffect, type ReactNode } from "react";

// Local imports
import type { Task } from "../types";
import { TaskContext } from "./TaskContext";
import { getJsonData, setJsonData } from "../utils";

// Storage utils
const STORAGE_KEY = "tasks";

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(
    () => getJsonData(STORAGE_KEY) || []
  );

  // Persist tasks to localStorage whenever they change
  useEffect(() => {
    setJsonData(STORAGE_KEY, tasks);
  }, [tasks]);

  const addTask = (task: Omit<Task, "id">) =>
    setTasks((prev) => [...prev, { ...task, id: nanoid() }]);

  const updateTask = (updatedTask: Task) =>
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );

  const removeTask = (id: string) =>
    setTasks((prev) => prev.filter((task) => task.id !== id));

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};
