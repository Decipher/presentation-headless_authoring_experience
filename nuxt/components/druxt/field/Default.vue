<template>
  <Draggable>
    <slot :inline-edit="inlineEdit" />
  </Draggable>
</template>

<script>
import { DruxtFieldMixin } from 'druxt-entity'
import Draggable from 'vuedraggable'

export default {
  components: { Draggable },

  mixins: [DruxtFieldMixin],

  props: {
    inlineEdit: {
      type: Boolean,
      default: false,
    }
  },
}
</script>