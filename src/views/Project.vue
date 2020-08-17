<template>
  <div>
    <PageHeading>
      {{ editMode ? `Edit Project ` : 'Add Project '
      }}{{ `(name: ${model.name})` }}
    </PageHeading>
    <div class="w-full max-w-md m-auto">
      <form
        class="bg-white dark:bg-primary-dark shadow-md rounded px-8 py-6 mb-4"
      >
        <div class="mb-4">
          <label
            class="block text-text-primary dark:text-text-primary-dark text-sm font-bold mb-2"
            for="name"
            >Project Name</label
          >
          <input
            v-model="model.name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-text-primary dark:text-text-primary-dark text-sm font-bold mb-2"
            for="name"
            >Composer YML</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            @change="fileBrowser"
            accept=".yaml,.yml"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-text-primary dark:text-text-primary-dark text-sm font-bold mb-2"
            for="name"
            >Up Command</label
          >
          <input
            v-model="model.up"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-text-primary dark:text-text-primary-dark text-sm font-bold mb-2"
            for="name"
            >Down Command</label
          >
          <input
            v-model="model.down"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div class="text-center">
          <button
            @click="login"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, reactive } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Project',
  setup(props) {
    const route = useRoute()
    const name = route.params.name as string
    const editMode = computed(() => !!name)

    const fileBrowser = (evt: any) => {
      console.log(evt.target.files)
    }

    const model = reactive({
      name,
      up: 'docker-compose up -d',
      down: 'docker-compose down --remove-orphans',
    })

    return {
      model,
      editMode,
      fileBrowser,
    }
  },
})
</script>
