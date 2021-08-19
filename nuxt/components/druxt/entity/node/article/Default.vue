<template>
  <div class="lg:flex">
    <div class="flex-auto mr-10 w-full lg:w-3/4">
      <AppInlineEdit>
        <template #default="{ edit }">
          <h1 v-if="!edit" class="mb-5 text-5xl">{{ entity.attributes.title }}</h1>
          <AppFormInput v-if="edit" v-model="entity.attributes.title" />
        </template>
      </AppInlineEdit>

      <AppInlineEdit v-for="field of fields" :key="field.id" class="mb-3">
        <template #default="{ edit }">
          <slot :name="field.id" :inline-edit="edit" />
        </template>
      </AppInlineEdit>
    </div>

    <div class="w-full lg:w-1/4">
      <AppAuthor
        :uid="model.relationships.uid.data.meta.drupal_internal__target_id"
      />
    </div>
  </div>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  mixins: [DruxtEntityMixin],
}
</script>
