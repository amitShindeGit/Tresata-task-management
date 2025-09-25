import { useContext } from "react";
import Accordion from "../components/Accordion";
import TaskCard from "../components/TaskCard";
import { TaskContext } from "../utils/context/TaskContext";

function HomePage() {
  const { tasks } = useContext(TaskContext);
  return (
    <Accordion title="In Progress">
      <TaskCard task={tasks[0]} onDelete={() => {}} onEdit={() => {}} />
    </Accordion>
  );
}

export default HomePage;
