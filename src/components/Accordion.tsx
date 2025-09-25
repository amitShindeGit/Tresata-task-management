import React, { useState, type ReactNode } from "react";
import { AccordionDownArrow, AccordionUpArrow } from "../utils/assets";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div
      style={{
        borderRadius: 4,
        marginBottom: 8,
        marginLeft: 16,
        marginRight: 16,
        boxSizing: "border-box",
        width: "calc(100% - 32px)",
        backgroundColor: "#F3F6F9",
      }}
    >
      <button
        onClick={handleToggle}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "12px 20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span style={{ marginLeft: 8 }}>
          {isOpen ? <AccordionUpArrow /> : <AccordionDownArrow />}
        </span>
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Accordion;
