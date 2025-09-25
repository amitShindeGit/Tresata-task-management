import { useContext, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import Accordion from "../components/Accordion";
import Dropdown from "../components/display/Dropdown";
import { RenderConditional } from "../components/display/RenderConditional";
import SearchBar from "../components/display/SearchBar";
import TaskCard from "../components/TaskCard";
import { AddNewTaskIcon } from "../utils/assets";
import { STATUS_FILTER_OPTIONS } from "../utils/constants";
import { TaskContext } from "../utils/context/TaskContext";
import type { TaskStatus } from "../utils/types";

function HomePage() {
  const { tasks, removeTask } = useContext(TaskContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const inProgressTasks = useMemo(() => {
    let filtereStatus = statusFilter;
    if (statusFilter === "all") {
      filtereStatus = "in-progress";
    }

    return tasks
      .filter(
        (task) =>
          task.status === "in-progress" &&
          task.status === filtereStatus &&
          task.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        const dateA = new Date(a.updatedAt).getTime();
        const dateB = new Date(b.updatedAt).getTime();
        return dateB - dateA; // descending (newest first)
      });
  }, [searchQuery, statusFilter, tasks]);

  const pendingTasks = useMemo(() => {
    let filtereStatus = statusFilter;
    if (statusFilter === "all") {
      filtereStatus = "pending";
    }

    return tasks
      .filter(
        (task) =>
          task.status === "pending" &&
          task.status === filtereStatus &&
          task.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        const dateA = new Date(a.updatedAt).getTime();
        const dateB = new Date(b.updatedAt).getTime();
        return dateB - dateA; // descending (newest first)
      });
  }, [searchQuery, statusFilter, tasks]);

  const completedTasks = useMemo(() => {
    let filtereStatus = statusFilter;
    if (statusFilter === "all") {
      filtereStatus = "completed";
    }

    return tasks
      .filter(
        (task) =>
          task.status === "completed" &&
          task.status === filtereStatus &&
          task.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        const dateA = new Date(a.updatedAt).getTime();
        const dateB = new Date(b.updatedAt).getTime();
        return dateB - dateA; // descending (newest first)
      });
  }, [searchQuery, statusFilter, tasks]);

  return (
    <div>
      <div className="flex ">
        <SearchBar
          value={searchQuery}
          onChange={(val) => setSearchQuery(val)}
        />

        <div className=" mb-2 mx-4 mr-7 w-full p-2">
          <Dropdown
            value={statusFilter}
            options={STATUS_FILTER_OPTIONS}
            onChange={(val) => setStatusFilter(val as TaskStatus)}
          />
        </div>
      </div>
      <RenderConditional check={inProgressTasks.length > 0}>
        <div className="mb-6">
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
        </div>
      </RenderConditional>

      <RenderConditional check={pendingTasks.length > 0}>
        <div className="mb-6">
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
        </div>
      </RenderConditional>

      <RenderConditional check={completedTasks.length > 0}>
        <div className="mb-6">
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
        </div>
      </RenderConditional>

      <Link to="/new" className="fixed bottom-10 right-10">
        <AddNewTaskIcon />
      </Link>
    </div>
  );
}

export default HomePage;
