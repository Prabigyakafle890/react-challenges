import PwInput from "./components/pw_input";
import "./index.css";
import GithubProfileFetcher from "./components/github_profile_fetcher/GithubProfileFetcher";
import { useLocalStorage } from "./components/useLocalStorageHook/hooks/useLocalStorage";
import { SearchableDropdown } from "./components/SearchableDropdown";
import { UseReducerTodo } from "./components/UseReducerTodo";
import { DragAndDropList } from "./components/DragAndDropList";
import { Notes } from "./components/Notes/Notes";
import { Users } from "./components/UseFetch/Users";
import { CommandPalette } from "./components/CommandPallete";

import {Accordion} from "./components/Accordion/Accordion";
import {AccordionItem} from "./components/Accordion/AccordionItem";
import {AccordionHeader} from "./components/Accordion/AccordionHeader";
import {AccordionContent} from "./components/Accordion/AccordionContent";

function App() {
  const [LSValue, setLSValue] = useLocalStorage("ls", "");

  return (
    <>
      <Users />
      <PwInput />
      <GithubProfileFetcher />
      <SearchableDropdown />

      <input
        placeholder="Enter something here"
        onChange={(e) => setLSValue(e.target.value)}
        className="border p-5"
      />

      <p>{LSValue}</p>

      <UseReducerTodo />
      <DragAndDropList />
      <Notes />
      <CommandPalette />

  
      <div className="max-w-xl mx-auto mt-10">
        <Accordion multiple={true}>
          <AccordionItem>
            <AccordionHeader index={0}>
              What is React?
            </AccordionHeader>

            <AccordionContent index={0}>
              React is a JavaScript library for building UI.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader index={1}>
              What is Context API?
            </AccordionHeader>

            <AccordionContent index={1}>
              Context API helps share state globally without prop drilling.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader index={2}>
              What is Compound Component Pattern?
            </AccordionHeader>

            <AccordionContent index={2}>
              It is a pattern where related components work together under one parent.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default App;