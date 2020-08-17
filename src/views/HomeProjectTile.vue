<template>
  <div
    class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 h-40"
    @click="emit('click', project && project.id)"
  >
    <div
      class="flex items-center justify-center bg-text-primary text-primary h-full p-2 rounded dark-hover:bg-primary dark-hover:text-primary-dark"
    >
      <span class="flex items-center" v-if="empty">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-6 h-6 inline-block"
        >
          <path
            fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
        <span>NEW</span>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectTile',
  props: {
    empty: {
      type: Boolean,
      default: () => false,
    },
    project: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, { emit }) {
    return {
      emit,
    }
  },
})
</script>
