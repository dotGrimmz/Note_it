import { reactive } from "vue";

export const useLocalStorage = reactive({
  notes: [],
  loadNotes() {
    const getNotesFromLocalStorage = localStorage.getItem("noteContent") || "";
    if (!getNotesFromLocalStorage) {
      return (this.notes = []);
    }
    const existingNotes = JSON.parse(getNotesFromLocalStorage);
    this.notes = existingNotes;
  },
  saveNotes() {
    localStorage.setItem("noteContent", JSON.stringify(this.notes));
  },
});

