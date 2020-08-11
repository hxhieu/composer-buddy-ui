<template>
  <Nav />
  <RouterView class="max-w-screen-xl m-auto" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Nav from './components/Nav.vue'

export default defineComponent({
  name: 'ComposerBuddy',
  components: {
    Nav,
  },
})
</script>
