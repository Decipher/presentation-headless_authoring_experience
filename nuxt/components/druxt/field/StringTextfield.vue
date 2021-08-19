<template>
  <div>
    <label class="label">
      <span class="label-text">{{ schema.label.text }}:</span>
    </label>
    <input
      v-model="model"
      type="text"
      placeholder="username"
      class="input input-bordered"
    />
  </div>
</template>

<script>
import { DruxtFieldMixin } from 'druxt-entity'

export default {
  mixins: [DruxtFieldMixin],
}
</script>
