<template>
  <Nav />
  <RouterView class="max-w-screen-xl m-auto px-6" />
  <footer
    class="fixed flex items-center justify-between py-1 px-2 bottom-0 left-0 right-0 bg-primary dark:bg-primary-dark text-text-primary-dark"
  >
    <span class="text-xs text-gray-700">0.1.0.dfce142</span>
    <span>
      Copyright &copy; {{ year }}
      <a
        target="_blank"
        class="text-text-primary hover:text-white dark:text-primary dark-hover:text-white"
        href="https://github.com/hxhieu"
        >hxhieu</a
      >
    </span>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Nav from './components/Nav.vue'

export default defineComponent({
  name: 'ComposerBuddy',
  components: {
    Nav,
  },
  setup() {
    return {
      year: ref(new Date().getFullYear()),
    }
  },
})
</script>
