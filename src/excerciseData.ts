import PwInput from "./components/pw_input";
import GithubProfileFetcher from "./components/github_profile_fetcher/GithubProfileFetcher";
import { SearchableDropdown } from "./components/SearchableDropdown";
import { UseReducerTodo } from "./components/UseReducerTodo";
import { DragAndDropList } from "./components/DragAndDropList";
import { Notes } from "./components/Notes/Notes";
import { Users } from "./components/UseFetch/Users";
import { CommandPalette } from "./components/CommandPallete";

export const exercises = [
  {
    id: 1,
    name: "Password Input with Strength Indicator",
    description:
      "Controlled password input with visibility toggle and dynamic strength evaluation (weak, medium, strong).",
    component: PwInput,
  },
  {
    id: 2,
    name: "GitHub Profile Fetcher",
    description:
      "Search GitHub profiles with debounce, loading states, error handling, and AbortController support.",
    component: GithubProfileFetcher,
  },
  {
    id: 3,
    name: "Searchable Dropdown",
    description:
      "Custom dropdown with filtering, keyboard navigation, and click-outside handling.",
    component: SearchableDropdown,
  },
  {
    id: 4,
    name: "LocalStorage Hook Demo",
    description:
      "useLocalStorage hook with persistence and cross-tab sync.",
    component: "UseLocalStorageDemo",
  },
  {
    id: 5,
    name: "Optimized Todo List",
    description:
      "Todo app using useReducer with React.memo and useCallback optimizations.",
    component: UseReducerTodo,
  },
  {
    id: 6,
    name: "Drag and Drop List",
    description:
      "Reorderable list using HTML5 drag and drop API.",
    component: DragAndDropList,
  },
  {
    id: 7,
    name: "Notes App (Context + Reducer)",
    description:
      "Persistent notes app with global state, debounce autosave, and localStorage sync.",
    component: Notes,
  },
  {
    id: 8,
    name: "Users Fetch (useFetch Hook)",
    description:
      "Custom useFetch hook with caching, deduplication, and request management.",
    component: Users,
  },
  {
    id: 9,
    name: "Command Palette",
    description:
      "Cmd/Ctrl+K command palette with fuzzy search, portal rendering, and keyboard navigation.",
    component: CommandPalette,
  },
];