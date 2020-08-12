<template>
  <div>
    <PageHeading class="text-center">Welcome to Composer Buddy</PageHeading>
    <div class="w-full max-w-md m-auto">
      <form
        class="bg-white dark:bg-primary-dark shadow-md rounded px-8 py-6 mb-4"
      >
        <div v-if="!isAuthenticated">
          <div class="mb-4">
            <label
              class="block text-text-primary dark:text-text-primary-dark text-sm font-bold mb-2"
              for="username"
              >Username</label
            >
            <input
              v-model="user"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-text-primary dark:text-text-primary-dark text-sm font-bold mb-2"
              for="password"
              >Password</label
            >
            <input
              v-model="password"
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
            />
          </div>
          <div class="text-center">
            <button
              @click="login"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
        </div>
        <div v-else>
          <div class="text-center">
            <button
              @click="logout"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Out
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'Login',
  setup() {
    const { dispatch, state } = useStore()
    const isAuthenticated = computed(() => !!state.auth.accessToken)

    const user = ref('')
    const password = ref('')
    const login = () => {
      dispatch('auth/login', { user: user.value, password: password.value })
      user.value = ''
      password.value = ''
    }
    const logout = () => {
      dispatch('auth/logout')
    }

    return {
      user,
      password,
      login,
      logout,
      isAuthenticated,
    }
  },
})
</script>
