import { createContext, useContext } from "react";

type AccordionContextType = {
  openItems: number[];
  toggleItem: (index: number) => void;
};

export const AccordionContext =
  createContext<AccordionContextType | null>(null);

export const useAccordion = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("Use inside Accordion");
  }

  return context;
};