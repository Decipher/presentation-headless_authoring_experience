<template>
  <AppWysiwyg v-model="model.processed" />
</template>

<script>
import { DruxtFieldMixin } from 'druxt-entity'

export default {
  mixins: [DruxtFieldMixin],

  data: ({ value }) => ({
    model: {
      processed: null,
      ...value
    }
  }),

  watch: {
    'model.processed'() {
      this.model.value = this.model.processed
      this.$emit('input', this.model)
    }
  }
}
</script>
