<template>
  <Notes />
</template>

<script>
import Notes from "./views/NotesView.vue";
export default {
  components: {
    Notes,
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "poppins", sans-serif;
}

body {
  background-color: rgba(102, 51, 153, 0.686);
  min-height: 100vh;
  width: 100%;
}

.inputGroup {
  padding: 40px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
}

input {
  padding: 10px;
  outline: none;
  caret-color: rebeccapurple;
}

input:focus,
input:active {
  border: 2px solid rebeccapurple;
}

button {
  background-color: rebeccapurple;
  border: none;
  color: white;
  outline: none;
  padding: 10px;
  font-size: 18px;
}

button:hover {
  opacity: 0.8;
  cursor: pointer;
}

.title {
  color: white;
  font-weight: 400;
  margin-left: 12rem;
  padding-top: 3rem;
  text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.4);
}

.notes {
  margin: 50px;
  margin-top: 10px;
  display: flex;
  margin-left: 150px;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  background-color: white;
  width: 300px;
  margin: 20px;
  height: 200px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
  flex-grow: 0;
  width: 20%;
}

.card-header {
  background-color: rebeccapurple;
  height: 50px;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h3 {
  font-weight: 400;
}

#del {
  cursor: pointer;
}

.card-body {
  padding: 20px;
  overflow: auto;
  word-wrap: break-word;
  height: 150px;
}
.note-wrapper {
  display: flex;
}
.panel-header {
  color: black;
  text-align: center;
  font-size: 30px;
}
.details {
  color: black;
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

.panel-item:hover {
  transform: scale(1.04);
}
.note-input {
  height: 100px;
  width: 400px;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.77);
}
</style>
