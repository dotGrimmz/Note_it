<!-- eslint-disable prettier/prettier -->

<template>
   
    <div class="note-wrapper" >
    <p class="details">Note: {{details}} </p>
    <textarea v-if="showEdit"  v-model="editDetails"></textarea>
    </div>
    <div class="btn-container">
    <button :disabled="editDetails == ''" @click="Edit">Edit</button>
    <button @click="Delete" >Delete</button>
   
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
