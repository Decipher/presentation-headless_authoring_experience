const MixinEditInline = {
  data: () => ({
    inline: {
      edit: false,
      error: null,
      response: null,
    }
  }),

  methods: {
    async saveInlineEdit() {
      const url = [this.schema.config.href, this.entity.id].join('/')
      try {
        this.inline.response = await this.$druxt.axios.patch(
          url,
          { data: this.model },
          { header: { 'Content-Type': 'application/vnd.api+json' } }
        )
      } catch (e) {
        this.inline.error = e
      }
    },

    toggleInlineEdit() {
      if (!this.$nuxt.context.isDev) return
      this.inline.edit = !this.inline.edit
    }
  }
}

export { MixinEditInline }
