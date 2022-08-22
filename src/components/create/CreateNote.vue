<template>
  <div class="create-note-wrapper">
    <textarea class="note-input" v-model="details" />
    <button
      id="create-btn"
      class="note-btn"
      :disabled="!details"
      @click="CreateNote"
    >
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
@import "../../assets/globals";
@import "../../assets/abstracts/colors";

.note-btn {
  @include styled-button;
  height: 30px;
  font-size: 20px;
  font-weight: 10;
  margin-top: 10px;
}

.create-note-wrapper {
  @include flex-container(column);
}
.note-input {
  height: 100px;
  width: 400px;
  border-radius: 5px;
  box-shadow: $shadowLight;
}
</style>
