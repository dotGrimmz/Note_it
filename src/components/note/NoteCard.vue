<template>
  <div class="note-wrapper">
    <p :id="'note-details-' + index" class="details">Note: {{ details }}</p>
    <textarea
      :id="'edit-input' + index"
      v-if="showEdit"
      v-model="editDetails"
    ></textarea>
  </div>
  <div class="btn-container">
    <button id="edit-btn" :disabled="!editDetails" @click="Edit">
      <div>
        <p v-if="!showEdit">Edit</p>
        <p id="save-btn" v-else>Save</p>
      </div>
    </button>
    <button :id="'delete-btn' + index"   @click="Delete">Delete</button>
  </div>
</template>

<script>
export default {
  props: ["details", "index"],
  data() {
    return {
      editDetails: this.details,
      showEdit: false,
    };
  },
  methods: {
    Edit() {
      this.showEdit = !this.showEdit;
      if (!this.showEdit) {
        this.$emit("EditEmit", {
          details: this.editDetails,
          index: this.index,
        });
      }
    },
    Delete() {
      this.$emit("DeleteEmit", this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/abstracts/colors";
@import "@/assets/globals";

.note-wrapper {
  display: flex;
}

button {
  margin: 2px;
}
.details {
  color: $textColor;
}
</style>
