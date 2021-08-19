<template>
  <div class="form-control">
    <input
      v-model="model"
      class="input input-bordered"
      type="text"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    }
  },

  data: ({ value }) => ({
    model: value,
  }),

  watch: {
    model() {
      this.$emit('input', this.model)
    }
  }
}
</script>
