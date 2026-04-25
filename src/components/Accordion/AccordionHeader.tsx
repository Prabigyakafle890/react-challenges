import React from "react";
import { useAccordion } from "./AccordionContext";

type AccordionHeaderProps = {
  children: React.ReactNode;
  index: number;
};

export const AccordionHeader = ({
  children,
  index,
}: AccordionHeaderProps) => {
  const { toggleItem, openItems } = useAccordion();

  const isOpen = openItems.includes(index);

  return (
    <button
      onClick={() => toggleItem(index)}
      className="w-full text-left px-4 py-3 bg-gray-100 font-medium flex justify-between"
    >
      <span>{children}</span>
      <span>{isOpen ? "-" : "+"}</span>
    </button>
  );
};
