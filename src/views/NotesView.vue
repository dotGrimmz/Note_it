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
        <Create @CreateEmit="createNote" :success="success" />
      </div>
    </div>
  </main>
</template>

<script>
import Create from "../components/create/CreateNote.vue";
import NoteCard from "../components/note/NoteCard.vue";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

export default {
  setup() {
    useLocalStorage.loadNotes();
    const savedNotes = useLocalStorage.notes;
    const noteCreatedToast = () => {
      createToast("Note Created!", {
        type: "success",
        position: "bottom-left",
      });
    };
    const noteDeletedToast = () => {
      createToast("Note Deleted!", { type: "info", position: "bottom-left" });
    };
    const editedNoteSaved = () =>
      createToast("Note Saved", { type: "default", position: "bottom-left" });

    return {
      notes: savedNotes,
      noteCreatedToast,
      noteDeletedToast,
      editedNoteSaved,
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
      this.noteCreatedToast();
    },
    editNote({ details, index }) {
      this.notes[index].details = details;
      useLocalStorage.saveNotes();
      this.editedNoteSaved();
    },

    deleteNote(index) {
      this.notes.splice(index, 1);
      useLocalStorage.saveNotes();
      this.noteDeletedToast();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/abstracts/colors";
@import "../assets/globals";

.header-container {
  text-align: center;
  font-size: 40px;
  margin-bottom: 30px;
}

.wrapper {
  @include flex-container;
  justify-content: space-around;
}
.panel-container {
  @include flex-container(column);
  border: 1.5px solid green;
  width: 300px;
  align-items: center;
  grid-gap: 5px;
  background: white;
  border-radius: 5px;
  box-shadow: $shadowLight;
  padding-bottom: 15px;
  padding-top: 15px;
}
.panel-item {
  border: 1.5px solid black;
  width: 250px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  box-shadow: $shadowLight;
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
