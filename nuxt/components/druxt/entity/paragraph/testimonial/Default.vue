<template>
  <div v-if="!$attrs['inline-edit']" class="my-5">
    <blockquote><slot name="field_content" /></blockquote>
    <em>-- {{ model.attributes.field_attestant_name }}</em>
  </div>

  <div v-else class="mb-3">
    <DruxtEntityForm v-model="model" :type="model.type" :uuid="model.id" />
  </div>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  mixins: [DruxtEntityMixin],
}
</script>