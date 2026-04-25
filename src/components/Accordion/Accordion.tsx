import { useState, type ReactNode } from "react";
import { AccordionContext } from "./AccordionContext";

export const Accordion = ({
  children, multiple
}: {
  children: ReactNode;
  multiple: boolean;
}) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    const isOpen = openItems.includes(index);

    if (multiple) {
      if (isOpen) {
        setOpenItems(openItems.filter((i) => i !== index));
      } else {
        setOpenItems([...openItems, index]);
      }
    } else {
      setOpenItems(isOpen ? [] : [index]);
    }
  };

  return (
    <AccordionContext.Provider
      value={{ openItems, toggleItem }}
    >
      {children}
    </AccordionContext.Provider>
  );
};