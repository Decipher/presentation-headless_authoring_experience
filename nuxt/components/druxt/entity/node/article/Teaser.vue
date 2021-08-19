<template>
  <AppInlineEdit :close="false" class="card bordered hover:shadow mb-5">
    <template #default="{ edit, onSave, onToggle }">
      <!-- <figure>
        <img src="https://picsum.photos/id/1005/60/40" class="w-full" />
      </figure> -->
      <div class="card-body">
        <!-- Title -->
        <div class="card-title">
          <NuxtLink v-if="!edit" :to="url" v-text="entity.attributes.title" />
          <AppFormInput v-else v-model="entity.attributes.title" />
        </div>

        <!-- Tags -->
        <div v-if="tags" class="mb-5">
          <slot name="field_tags" :inline-edit="edit" />
        </div>

        <!-- Body -->
        <slot name="field_content" :inline-edit="edit" />

        <div class="card-actions">
          <NuxtLink v-if="!edit" class="btn btn-primary" :to="url">Read more</NuxtLink>
          <button v-if="edit" class="btn btn-secondary" @click="onSave">Save</button>
          <button v-if="edit" class="btn btn-neutral" @click="onToggle">Close</button>
        </div>
      </div>
    </template>
  </AppInlineEdit>    
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  mixins: [DruxtEntityMixin],

  computed: {
    tags: ({ model }) =>
      model.relationships.field_tags.data.length
        ? model.relationships.field_tags.data
        : false,

    url: ({ model }) => `node/${model.attributes.drupal_internal__nid}`,
  },
}
</script>
