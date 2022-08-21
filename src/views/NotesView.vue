<template>
  <div>
    <Create @CreateEmit="createNote" />
    <div class="panel-container">
      <div class="panel-item" v-for="(note, index, key) in notes" :key="key">
        <NoteCard
          @DeleteEmit="deleteNote"
          @EditEmit="editNote"
          :details="note.details"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Create from "../components/create/CreateNote.vue";
import NoteCard from "../components/note/NoteCard.vue";
import { useLocalStorage } from "../hooks/useLocalStorage";
export default {
  setup() {
    useLocalStorage.loadNotes();
    const savedNotes = useLocalStorage.notes;
    return {
      notes: savedNotes,
    };
  },
  components: {
    Create,
    NoteCard,
  },

  methods: {
    createNote(details) {
      this.notes.push({
        details: details,
      });
      useLocalStorage.saveNotes();
    },
    editNote({ details, index }) {
      this.notes[index].details = details;
      useLocalStorage.saveNotes();
    },

    deleteNote(index) {
      this.notes.splice(index, 1);
      useLocalStorage.saveNotes();
    },
  },
};
</script>
