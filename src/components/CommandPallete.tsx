import { createPortal } from "react-dom";
import { useState, useEffect, useMemo } from "react";
import Fuse from "fuse.js";

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands = useMemo(
    () => [
      { name: "Open File", action: () => alert("Opening file...") },
      { name: "Save File", action: () => alert("Saving file...") },
      { name: "Close File", action: () => alert("Closing file...") },
    ],
    [],
  );

  const fuse = useMemo(() => {
    return new Fuse(commands, {
      keys: ["name"],
      threshold: 0.6,
      ignoreLocation: true,
    });
  }, [commands]);

  const filteredCommands = useMemo(() => {
    if (!query) return commands;
    return fuse.search(query).map((r) => r.item);
  }, [query, fuse, commands]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, filteredCommands.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isCmdK =
        (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";

      if (isCmdK) {
        event.preventDefault();
        setIsOpen(true);
        setQuery("");
        setSelectedIndex(0);
        return;
      }

      if (!isOpen) return;

      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedIndex((prev) =>
          Math.min(prev + 1, filteredCommands.length - 1),
        );
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      }

      if (event.key === "Enter") {
        event.preventDefault();
        const cmd = filteredCommands[selectedIndex];
        if (cmd) {
          cmd.action();
          setIsOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex]);

  return (
    <div>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)}>Open Command Palette</button>
      )}

      {isOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 bg-black/20 flex justify-center items-start pt-28 z-50"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="bg-gray-100 rounded-xl shadow-xl w-125 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <input
                autoFocus
                role="combobox"
                aria-expanded={isOpen}
                aria-controls="command-list"
                placeholder="Type a command..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full outline-none border-b pb-2 mb-3"
              />

              <ul role="listbox" id="command-list">
                {filteredCommands.map((cmd, i) => (
                  <li
                    key={cmd.name}
                    role="option"
                    aria-selected={i === selectedIndex}
                    onMouseEnter={() => setSelectedIndex(i)}
                    onClick={() => {
                      cmd.action();
                      setIsOpen(false);
                    }}
                    className={`px-3 py-2 rounded cursor-pointer ${
                      i === selectedIndex ? "bg-gray-200" : ""
                    }`}
                  >
                    {cmd.name}
                  </li>
                ))}
              </ul>

              <button
                className="mt-3 border px-3 py-1 rounded bg-white hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>,
          document.querySelector(".my-portal") as HTMLElement,
        )}
    </div>
  );
}
