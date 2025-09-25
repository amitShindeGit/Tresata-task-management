import Tag from "../components/display/Tag";
import type { Option } from "../components/types";

export const STATUS_OPTIONS: Option[] = [
  {
    id: 1,
    label: "In Progress",
    value: "in-progress",
    element: <Tag variant="progress" />,
  },
  {
    id: 2,
    label: "Pending",
    value: "pending",
    element: <Tag variant="pending" />,
  },
  {
    id: 3,
    label: "Completed",
    value: "completed",
    element: <Tag variant="completed" />,
  },
];
