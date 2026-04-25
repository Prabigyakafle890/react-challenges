import { Accordion } from "./Accordion";
import { AccordionItem } from "./AccordionItem";
import { AccordionHeader } from "./AccordionHeader";
import { AccordionContent } from "./AccordionContent";

export const AccordionDemo = () => {
  return (
    <div className="max-w-xl mx-auto mt-6">
      <h1 className="text-2xl font-bold mb-4">
        Accordion Demo
      </h1>

      <Accordion multiple={true}>
        <AccordionItem>
          <AccordionHeader index={0}>
            What is React?
          </AccordionHeader>

          <AccordionContent index={0}>
            React is a JavaScript library for building user interfaces using components.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader index={1}>
            What is Context API?
          </AccordionHeader>

          <AccordionContent index={1}>
            Context API is used to share state globally without prop drilling.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader index={2}>
            What is Compound Component Pattern?
          </AccordionHeader>

          <AccordionContent index={2}>
            It is a pattern where components work together under one parent to create a flexible API.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};