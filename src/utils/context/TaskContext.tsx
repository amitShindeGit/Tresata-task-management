import { createContext, useContext } from 'react';
import type { Task } from '../types';



interface TaskContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
    updateTask: (task: Task) => void;
    removeTask: (id: string) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
};