<template>
  <component :is="component.is" v-bind="component">
    <div class="container mx-auto">
      <AppHeader class="flex-none mb-10">
        <label
          v-if="isDev"
          for="my-drawer"
          class="btn btn-square btn-ghost drawer-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </label>
      </AppHeader>

      <main class="flex-grow">
        <Nuxt />
      </main>

      <div>
        <a href="https://druxtjs.org" class="link-secondary" target="_blank"
          >DruxtJS.org</a
        >
      </div>
    </div>

    <template v-if="isDev" #drawer>
      <label class="label">
        <span class="label-text">Theme</span>
      </label>
      <select class="select select-bordered w-full max-w-xs" v-model="theme">
        <option disabled="disabled" selected="selected">Select a theme</option>
        <option v-for="theme of themes" :key="theme">{{ theme }}</option>
      </select>
    </template>
  </component>
</template>

<script>
export default {
  data: () => ({
    theme: 'light',
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
    ],
  }),

  head: ({ theme }) => ({
    htmlAttrs: {
      'data-theme': theme,
    },
  }),

  computed: {
    component: ({ isDev }) => ({
      [isDev ? 'content-class' : 'class']: 'flex flex-col py-10',
      is: isDev ? 'AppDrawer' : 'div',
    }),

    isDev: ({ $nuxt }) => $nuxt.context.isDev,
  },
}
</script>
