import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router";
import type { TaskStatus } from "../utils/types";
import Dropdown from "./display/Dropdown";
import { STATUS_OPTIONS } from "../utils/constants";
import type { SubmitData, TaskFormProps } from "./types";
import { RenderConditional } from "./display/RenderConditional";

const TaskForm: React.FC<TaskFormProps> = ({
  title,
  description,
  status,
  onSubmit,
}) => {
  const navigate = useNavigate();
  const [currentTitle, setCurrentTitle] = useState(() => title || "");
  const [currentDescription, setCurrentDescription] = useState(
    () => description || ""
  );
  const [selected, setSelected] = useState<TaskStatus>(status ?? "in-progress");
  const [descriptionError, setCurrentDescriptionError] = useState<string>("");

  useEffect(() => {
    setCurrentTitle(title || "");
    setCurrentDescription(description || "");
    setSelected(status ?? "in-progress");
  }, [title, description, status]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentDescription?.trim().length === 0) {
      setCurrentDescriptionError("Description cannot be empty or only spaces");
      return;
    }

    const trimmedTitle = currentTitle?.trim();
    const trimmedDescription = currentDescription?.trim();

    if (trimmedTitle && trimmedDescription) {
      let submitData: SubmitData = {
        title: trimmedTitle,
        description: trimmedDescription,
      };

      if (status && selected) {
        submitData = { ...submitData, status: selected };
      }
      onSubmit(submitData);
      setCurrentTitle("");
      setCurrentDescription("");
    }
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setCurrentDescription(value);

    // Validation: must contain at least one non-space character
    if (value.trim().length === 0 && value.length > 0) {
      setCurrentDescriptionError("Description cannot be empty or only spaces");
    } else {
      setCurrentDescriptionError("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 md:max-w-7xl max-w-sm mx-auto lg:p-4 p-8 "
    >
      <div style={{ marginBottom: 12 }}>
        <label>
          <input
            type="text"
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter the title (max 100 characters)"
            maxLength={100}
            pattern=".*\S.*"
            title="Title cannot be empty or only spaces"
          />
        </label>
      </div>
      <div className="mb-4">
        <label>
          <textarea
            value={currentDescription}
            onChange={handleDescriptionChange}
            required
            rows={4}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter the description (max 500 characters)"
            maxLength={500}
          />
          {descriptionError && (
            <p className="text-red-500 text-sm">{descriptionError}</p>
          )}
        </label>
      </div>

      <RenderConditional check={Boolean(status)}>
        <Dropdown
          options={STATUS_OPTIONS}
          value={selected}
          onChange={(val) => setSelected(val as TaskStatus)}
        />
      </RenderConditional>
      <div className="mt-4 flex justify-between">
        <Button
          label="Cancel"
          variant="secondary"
          type="button"
          onClick={() => navigate(-1)}
        />

        <Button
          label={title || description ? "Update" : "Add"}
          type="submit"
          onSubmit={onSubmit}
        />
      </div>
    </form>
  );
};

export default TaskForm;
