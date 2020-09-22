<template>
  <nav class="flex items-center justify-between bg-primary dark:bg-primary-dark p-4">
    <router-link to="/" class="flex items-center flex-shrink-0 text-white mr-6">
      <div class="flex flex-col text-center text-white dark:text-text-primary-dark">
        <span class="font-semibold text-xl tracking-tight">Composer Buddy</span>
      </div>
    </router-link>
    <div v-if="isAuthenticated">
      <button
        @click="logout"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >Sign Out</button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavLink from './NavLink.vue'

export default defineComponent({
  name: 'Nav',
  components: {
    NavLink,
  },
  props: {
    isAuthenticated: {
      type: Boolean,
      default: () => false,
    },
  },
  setup(props, { emit }) {
    const logout = () => {
      emit('logout')
    }

    return {
      logout,
    }
  },
})
</script>
