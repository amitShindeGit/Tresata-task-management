import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import Accordion from "../components/Accordion";
import TaskCard from "../components/TaskCard";
import { AddNewTaskIcon } from "../utils/assets";
import { TaskContext } from "../utils/context/TaskContext";

function HomePage() {
  const { tasks } = useContext(TaskContext);
  const navigate = useNavigate();

  console.log(tasks)

  return (
    <div>
      <Accordion title="In Progress">
        <TaskCard
          task={tasks[0]}
          onDelete={() => {}}
          onEdit={() => navigate(`/edit/${tasks[0]?.id}`)}
        />
      </Accordion>

      <Link to="/new" className="fixed bottom-10 right-10">
        <AddNewTaskIcon />
      </Link>
    </div>
  );
}

export default HomePage;
