import { useContext, useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import { TaskContext } from "../utils/context/TaskContext";
import { useNavigate, useParams } from "react-router";
import type { Task } from "../utils/types";
import type { SubmitData } from "../components/types";
import NotFound from "../components/display/NotFound";

function EditTask() {
  const { tasks, updateTask } = useContext(TaskContext);
  const navigate = useNavigate();
  const { taskId } = useParams();
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  useEffect(() => {
    if (tasks.length > 0 && taskId) {
      const currTask = tasks.filter((task) => task.id === taskId);

      setCurrentTask(currTask[0]);
    }
  }, [taskId, tasks]);

  const handleEditTask = (data: SubmitData) => {
    updateTask({
      title: data?.title,
      createdAt: currentTask?.createdAt ?? new Date(),
      description: data?.description,
      status: data?.status ?? currentTask?.status ?? "in-progress",
      updatedAt: new Date(),
      id: currentTask?.id ?? "",
    });

    navigate("/");
  };

  if (!currentTask) {
    return <NotFound message="Task not found" />;
  }

  return (
    <TaskForm
      title={currentTask?.title}
      description={currentTask?.description}
      status={currentTask?.status}
      onSubmit={handleEditTask}
    />
  );
}

export default EditTask;
