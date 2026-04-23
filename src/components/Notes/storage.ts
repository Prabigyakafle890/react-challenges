import type { NotesType } from "./Notes";

const STORAGE_KEY = "notes";

export const saveNotes = (notes: NotesType[]) =>{
 localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export const getNotes = (): NotesType[] =>{
 const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return [];
  }
    return JSON.parse(stored);
}