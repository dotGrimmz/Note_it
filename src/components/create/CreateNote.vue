<template>
  <div>
    <textarea class="note-input" v-model="details" />
    <button :disabled="details == ''" @click="CreateNote">create note</button>
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

<style scoped>
.note-input {
  height: 100px;
  width: 400px;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.19);
}
</style>
