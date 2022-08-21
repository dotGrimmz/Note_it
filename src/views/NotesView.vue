<template>
  <main>
    <h1 class="header-container">Note It</h1>
    <div class="wrapper">
      <div>
        <h2>Saved Notes</h2>
        <div class="panel-container">
          <div v-if="notes.length === 0" class="empty-notes-msg">
            You have no saved notes
          </div>
          <div
            class="panel-item"
            v-for="(note, index, key) in notes"
            :key="key"
          >
            <NoteCard
              @DeleteEmit="deleteNote"
              @EditEmit="editNote"
              :details="note.details"
              :index="index"
            />
          </div>
        </div>
      </div>
      <div>
        <h2>Create a Note</h2>
        <Create @CreateEmit="createNote" />
      </div>
    </div>
  </main>
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

<style lang="scss" scoped>
@import "@/assets/_globals.scss";

.header-container {
  text-align: center;
  font-size: 40px;
  margin-bottom: 30px;
}

.wrapper {
  display: flex;
  justify-content: space-around;
}
.panel-container {
  border: 1.5px solid green;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 5px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.19);
  padding-bottom: 15px;
  padding-top: 15px;
}
.panel-item {
  border: 1.5px solid black;
  width: 250px;
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.19);
  height: fit-content;
  padding: 2px;
  transition: transform 0.2s;
  cursor: pointer;
}

.empty-notes-msg {
  color: $textColor;
}

.panel-item:hover {
  transform: scale(1.04);
}
</style>
