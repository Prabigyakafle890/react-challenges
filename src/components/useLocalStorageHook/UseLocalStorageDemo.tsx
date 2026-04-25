import { useLocalStorage } from "./hooks/useLocalStorage"

export const UseLocalStorageDemo = () => {
  const [value, setValue] = useLocalStorage("ls", "");

  return (
    <div>
      <input
        placeholder="Enter something"
        onChange={(e) => setValue(e.target.value)}
        className="border p-3"
      />
      <p className="mt-2">{value}</p>
    </div>
  );
};