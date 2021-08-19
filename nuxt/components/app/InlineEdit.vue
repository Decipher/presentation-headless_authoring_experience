<template>
  <div class="relative" @dblclick="onToggle">
    <input
      v-if="toggle && $nuxt.context.isDev"
      v-model="edit"
      type="checkbox"
      class="toggle toggle-accent toggle-xs absolute top-2.5 right-2.5"
    />

    <slot v-bind="{ edit, onSave, onToggle }" />

    <button v-if="close && edit" class="btn btn-neutral mt-1 mb-5" @click="onToggle">
      Close
    </button>
  </div>
</template>

<script>
export default {
  props: {
    close: {
      type: Boolean,
      default: true,
    },

    toggle: {
      type: Boolean,
      default: true,
    },
  },

  data: () => ({
    edit: false,
    error: null,
    response: null,
  }),

  methods: {
    async onSave() {
      const { entity, model, schema } = this.$parent
      const url = [schema.config.href, entity.id].join('/')
      try {
        this.response = await this.$druxt.axios.patch(
          url,
          { data: model },
          { headers: { 'Content-Type': 'application/vnd.api+json' } }
        )
      } catch (e) {
        this.error = e
      }
    },

    onToggle() {
      if (!this.$nuxt.context.isDev) return
      this.edit = !this.edit
    },
  },
}
</script>
