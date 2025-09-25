import React, { useState } from "react";
import { AccordionDownArrow, AccordionUpArrow } from "../../utils/assets";
import type { Option } from "../types";

interface DropdownProps {
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false); // close after selection
  };

  const selectedOption = options?.every(
    (option) => option.element !== undefined
  )
    ? options.find((o) => o.value === value)?.element
    : options.find((o) => o.value === value)?.label;

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={handleToggle}
        className="w-full p-2 border border-gray-300 rounded flex justify-between items-center"
      >
        {value ? selectedOption : "Select an option"}
        {isOpen ? <AccordionUpArrow /> : <AccordionDownArrow />}
      </button>

      {isOpen && (
        <ul className="absolute p-2 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto z-10">
          {options.map((opt) => (
            <li
              key={opt.id}
              onClick={() => handleSelect(opt.value)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {opt?.element ? opt.element : opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
