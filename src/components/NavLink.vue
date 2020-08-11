<template>
  <router-link
    :to="path"
    class="block text-lg mt-4 lg:inline-block lg:mt-0 text-white dark:text-text-primary-dark hover:text-blue-200 dark-hover:text-blue-200 mr-4"
    >{{ label }}</router-link
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NavLink',
  props: {
    path: {
      type: String,
      default: () => '/',
    },
    label: {
      type: String,
      default: () => 'Menu Item',
    },
  },
})
</script>
