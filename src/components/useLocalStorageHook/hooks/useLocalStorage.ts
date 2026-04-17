import { useState, useEffect } from "react";

export const useLocalStorage = (key: string, initialValue: string) => {

  const getLocalStorageValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Failed to parse localStorage:", error);
      return initialValue;
    }
  };

  const [value, setValue] = useState(getLocalStorageValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) =>{
      if(event.key === key){
        setValue(event.newValue ? JSON.parse(event.newValue) : initialValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, initialValue]);

  return [value, setValue] as const;
};