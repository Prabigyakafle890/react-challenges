import React from "react";

type AccordionItemProps = {
  children: React.ReactNode;
};

export const AccordionItem = ({ children }: AccordionItemProps) => {
  return (
    <div className="border border-gray-300 rounded-md mb-2 overflow-hidden">
      {children}
    </div>
  );
};
