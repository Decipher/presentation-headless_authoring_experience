<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  id: {
    type: String,
  },
  class: {
    type: String,
  },
})

const src = computed(() => `https://www.youtube.com/embed/${props.id}?rel=0`)
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full">
    <div class="slidev-layout default" :class="props.class">
      <slot />
    </div>
    <div class="w-full w-full">
      <iframe
        class="w-full h-full"
        height="100%"
        :src="src"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</template>
