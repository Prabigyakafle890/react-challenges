import { useState, useReducer, useEffect } from "react";
import { saveNotes, getNotes } from "./storage";

export type NotesType = {
  id: string;
  text: string;
};

type Action =
  | { type: "ADD"; payload: string }
  | { type: "DELETE"; payload: string };

const reducer = (state: NotesType[], action: Action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now().toString(), text: action.payload },
      ];

    case "DELETE":
      return state.filter((note) => note.id !== action.payload);

    default:
      return state;
  }
};

export const Notes = () => {
  const [input, setInput] = useState("");

  const [notes, dispatch] = useReducer(
    reducer,
    [],
    () => getNotes()
  );

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  useEffect(() => {
    const saved = localStorage.getItem("note-input");
    if (saved) setInput(saved);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem("note-input", input);
    }, 500);

    return () => clearTimeout(timeout);
  }, [input]);

  const addNote = () => {
    if (!input.trim()) return;
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-5">
        
        <h1 className="text-xl font-bold mb-4 text-center">
          My Notes
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your notes..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={addNote}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {notes.map((note) => (
            <li
              key={note.id}
              className="flex justify-between items-center bg-gray-50 p-2 rounded-lg border"
            >
              <span>{note.text}</span>

              <button
                onClick={() =>
                  dispatch({ type: "DELETE", payload: note.id })
                }
                className="text-red-500 hover:text-red-700 text-sm"
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};