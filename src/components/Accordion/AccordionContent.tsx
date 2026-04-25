import React from "react";
import { useAccordion } from "./AccordionContext";

type AccordionContentProps = {
  children: React.ReactNode;
  index: number;
};

export const AccordionContent = ({
  children,
  index,
}: AccordionContentProps) => {
  const { openItems } = useAccordion();

  const isOpen = openItems.includes(index);

  if (!isOpen) return null;

  return (
    <div className="px-4 py-3 bg-white border-t">
      {children}
    </div>
  );
};
