import { useContext, useMemo } from "react";
import { Link, useNavigate } from "react-router";
import Accordion from "../components/Accordion";
import TaskCard from "../components/TaskCard";
import { AddNewTaskIcon } from "../utils/assets";
import { TaskContext } from "../utils/context/TaskContext";
import { RenderConditional } from "../components/display/RenderConditional";

function HomePage() {
  const { tasks, removeTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const inProgressTasks = useMemo(() => {
    return tasks
      .filter((task) => task.status === "in-progress")
      .sort((a, b) => {
        const dateA = new Date(a.updatedAt).getTime();
        const dateB = new Date(b.updatedAt).getTime();
        return dateB - dateA; // descending (newest first)
      });
  }, [tasks]);

  const pendingTasks = useMemo(() => {
    return tasks
      .filter((task) => task.status === "pending")
      .sort((a, b) => {
        const dateA = new Date(a.updatedAt).getTime();
        const dateB = new Date(b.updatedAt).getTime();
        return dateB - dateA; // descending (newest first)
      });
  }, [tasks]);

  const completedTasks = useMemo(() => {
    return tasks
      .filter((task) => task.status === "completed")
      .sort((a, b) => {
        const dateA = new Date(a.updatedAt).getTime();
        const dateB = new Date(b.updatedAt).getTime();
        return dateB - dateA; // descending (newest first)
      });
  }, [tasks]);

  return (
    <div>
      <RenderConditional check={inProgressTasks.length > 0}>
        <Accordion title="In Progress" count={inProgressTasks.length}>
          {inProgressTasks?.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={() => removeTask(task.id)}
              onEdit={() => navigate(`/edit/${task?.id}`)}
            />
          ))}
        </Accordion>
      </RenderConditional>

      <RenderConditional check={pendingTasks.length > 0}>
        <Accordion title="Pending" count={pendingTasks.length}>
          {pendingTasks?.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={() => removeTask(task.id)}
              onEdit={() => navigate(`/edit/${task?.id}`)}
            />
          ))}
        </Accordion>
      </RenderConditional>

      <RenderConditional check={completedTasks.length > 0}>
        <Accordion title="Completed" count={completedTasks.length}>
          {completedTasks?.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={() => removeTask(task.id)}
              onEdit={() => navigate(`/edit/${task?.id}`)}
            />
          ))}
        </Accordion>
      </RenderConditional>

      <Link to="/new" className="fixed bottom-10 right-10">
        <AddNewTaskIcon />
      </Link>
    </div>
  );
}

export default HomePage;
