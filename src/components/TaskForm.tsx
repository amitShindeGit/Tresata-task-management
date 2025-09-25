import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router";

interface TaskFormProps {
  onSubmit: (data: { title: string; description: string }) => void;
  onCancel?: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [descriptionError, setDescriptionError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (description.trim().length === 0) {
      setDescriptionError("Description cannot be empty or only spaces");
      return;
    }

    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    onSubmit({ title: trimmedTitle, description: trimmedDescription });
    setTitle("");
    setDescription("");
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setDescription(value);

    // Validation: must contain at least one non-space character
    if (value.trim().length === 0 && value.length > 0) {
      setDescriptionError("Description cannot be empty or only spaces");
    } else {
      setDescriptionError("");
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter the title"
            maxLength={100}
            pattern=".*\S.*"
            title="Title cannot be empty or only spaces"
          />
        </label>
      </div>
      <div className="mb-4">
        <label>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            required
            rows={4}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter the description"
            maxLength={500}
          />
          {descriptionError && (
            <p className="text-red-500 text-sm">{descriptionError}</p>
          )}
        </label>
      </div>
      <div className="flex justify-between">
        <Button
          label="Cancel"
          variant="secondary"
          type="button"
          onClick={() => navigate(-1)}
        />

        <Button label="Add" type="submit" onSubmit={onSubmit} />
      </div>
    </form>
  );
};

export default TaskForm;
