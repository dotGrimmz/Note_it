<template>
  <div class="create-note-wrapper">
    <textarea class="note-input" v-model="details" />
    <button class="note-btn" :disabled="!details" @click="CreateNote">
      Create Note
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: "",
    };
  },
  methods: {
    CreateNote() {
      this.$emit("createEmit", this.details);
      this.details = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/globals";
@import "../../assets/abstracts/colors";
.note-input {
  height: 100px;
  width: 400px;
  border-radius: 5px;
  box-shadow: $shadowLight;
}

.note-btn {
  border-radius: 5px;
  color: teal;
  height: 30px;
  font-size: 20px;
  font-weight: 10;
  margin-top: 10px;
}
.note-btn:hover {
  cursor: pointer;
}
.create-note-wrapper {
  display: flex;
  flex-direction: column;
}
.note-input {
  height: 100px;
  width: 400px;
  border-radius: 5px;
  box-shadow: $shadowLight;
}
</style>
