<template>
  <Draggable v-model="model.data">
    <div
      v-for="(item, delta) of model.data"
      :key="item.id || delta"
      class="flex"
    >
      <div v-if="inlineEdit" class="cursor-move mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 8h16M4 16h16"
          />
        </svg>
      </div>
      <DruxtEntity
        v-if="item.id"
        :type="item.type"
        :uuid="item.id"
        :inline-edit="inlineEdit"
      />
    </div>

    <div slot="footer">
      <label
        v-if="inlineEdit"
        for="modal"
        class="btn btn-secondary modal-button"
        >Add another</label
      >
      <input id="modal" type="checkbox" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <select
            v-model="addType"
            class="mb-3 select select-bordered w-full max-w-xs"
          >
            <option disabled="disabled">
              Paragraph type
            </option>
            <option
              v-for="option of Object.keys(
                schema.settings.config.handler_settings.target_bundles
              )"
              :key="option"
            >
              {{ option }}
            </option>
          </select>

          <DruxtEntityForm
            v-if="addType"
            ref="addForm"
            v-model="addResource"
            :type="`paragraph--${addType}`"
          />

          <div class="modal-action">
            <label
              v-if="addType"
              for="modal"
              class="btn btn-primary"
              @click.prevent="onAddAnother"
              >Add</label
            >
            <label for="modal" class="btn">Close</label>
          </div>
        </div>
      </div>
    </div>
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
    },
  },

  data: () => ({
    addResource: undefined,
    addType: undefined,
  }),

  methods: {
    async onAddAnother() {
      const result = await this.$refs.addForm.onSubmit()
      console.log(result)
      // TODO: Add support for non-relationship fields.
      // this.model.data.push({
      //   type: null,
      //   id: null,
      // })
    },
  },
}
</script>
