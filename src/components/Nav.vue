<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-primary dark:bg-primary-dark p-4"
  >
    <router-link to="/" class="flex items-center flex-shrink-0 text-white mr-6">
      <div
        class="flex flex-col text-center text-white dark:text-text-primary-dark"
      >
        <span class="font-semibold text-xl tracking-tight">Composer Buddy</span>
      </div>
    </router-link>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <NavLink path="/projects" label="Projects" />
        <NavLink path="/projects1" label="Examples" />
        <NavLink path="/projects2" label="Blogs" />
      </div>
    </div>
    <div v-if="isAuthenticated">
      <button
        @click="logout"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Sign Out
      </button>
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
