<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
const props = defineProps({
  class: {
    type: String,
  },
  image: {
    type: String,
  },
  position: {
    type: String,
  },
})
const style = computed(() => handleBackground(props.image))
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full">
    <div class="slidev-layout default" :class="props.class">
      <slot />
    </div>
    <div class="w-full w-full" :style="{ ...style, backgroundPosition: position || style.backgroundPosition }"></div>
  </div>
</template>
