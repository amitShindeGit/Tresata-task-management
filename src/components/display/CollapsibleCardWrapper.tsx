import React, { useLayoutEffect, useRef, useState } from "react";
import type { CollapsibleCardWrapperProps } from "../types";

const CollapsibleCardWrapper: React.FC<CollapsibleCardWrapperProps> = ({
  children,
  maxHeight = 200,
  className = "",
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setIsOverflowing(contentRef.current.scrollHeight > maxHeight);
    }
  }, [children, maxHeight]);

  return (
    <div className={`bg-white  ${className}`}>
      <div
        ref={contentRef}
        style={{
          maxHeight: isCollapsed && isOverflowing ? maxHeight : "none",
          overflow: isCollapsed && isOverflowing ? "hidden" : "visible",
          transition: "max-height 0.3s ease",
        }}
      >
        {children}
      </div>
      {isOverflowing && (
        <div
          style={{
            position: "relative",
            marginTop: "0.5rem",
          }}
          className="flex justify-center"
        >
          {isCollapsed && (
            <div
              style={{
                position: "absolute",
                top: "-32px",
                left: 0,
                right: 0,
                height: "32px",
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.8))",
                pointerEvents: "none",
                borderRadius: "0.5rem 0.5rem 0 0",
              }}
            />
          )}
          <button
            className="cursor-pointer text-[#034EA2] hover:underline focus:outline-none relative z-10"
            onClick={() => setIsCollapsed((prev) => !prev)}
          >
            {isCollapsed ? "Show More" : "Show Less"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CollapsibleCardWrapper;
