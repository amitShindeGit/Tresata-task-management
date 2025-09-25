import { useContext } from "react";
import TaskForm from "../components/TaskForm";
import { TaskContext } from "../utils/context/TaskContext";
import { useNavigate } from "react-router";

function NewTask() {
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleAddTask = (data: { title: string; description: string }) => {
    addTask({
      title: data?.title,
      createdAt: new Date(),
      description: data?.description,
      status: "in-progress",
      updatedAt: new Date(),
      id: "",
    });

    navigate("/");
  };

  return <TaskForm onSubmit={handleAddTask} />;
}

export default NewTask;
