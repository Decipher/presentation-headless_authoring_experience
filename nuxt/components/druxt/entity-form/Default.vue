<template>
  <div>
    <div v-for="field_name of Object.keys(fields || {})" :key="field_name">
      <slot :name="field_name" />
    </div>
  </div>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  mixins: [DruxtEntityMixin],
}
</script>
