<template>
  <div>
    <PageHeading>
      {{ editMode ? `Edit Project ` : 'Add Project ' }}{{ `(name: ${name})` }}
    </PageHeading>
    <div class="w-full max-w-md m-auto">
      <form
        class="bg-white dark:bg-primary-dark shadow-md rounded px-8 py-6 mb-4"
      >
        <div class="mb-4">
          <label
            class="block text-text-primary dark:text-text-primary-dark text-sm font-bold mb-2"
            for="name"
            >Project Name<span class="form-asterisk">*</span></label
          >
          <input
            v-model="name"
            class="shadow border-2 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="validName ? '' : 'border-red-700'"
            type="text"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-text-primary dark:text-text-primary-dark text-sm font-bold mb-2"
            for="name"
            >Composer YML<span class="form-asterisk">*</span></label
          >
          <input
            class="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="validFile ? '' : 'border-red-700'"
            type="file"
            @change="fileBrowser"
            accept=".yaml, .yml"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-text-primary dark:text-text-primary-dark text-sm font-bold mb-2"
            for="name"
            >Up Args</label
          >
          <input
            v-model="up"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-text-primary dark:text-text-primary-dark text-sm font-bold mb-2"
            for="name"
            >Down Args</label
          >
          <input
            v-model="down"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div class="text-center">
          <button
            :disabled="!validAll"
            @click="save"
            class="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            :class="
              !validAll ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 '
            "
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
import { useRoute, useRouter } from 'vue-router'
import { useHttpClient } from '../composables/useHttpClient'
import { ICreateProjectResult, IHttpResponse } from '../models'

export default defineComponent({
  name: 'Project',
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    // Model
    const name = ref<string>(route.params.name as string)
    const editMode = ref<boolean>(!!name.value)
    const up = ref('-d')
    const down = ref('--remove-orphans')
    const dockerCompose = ref<Blob>()

    const validName = computed(() => !!name.value)
    const validFile = computed(() => !!dockerCompose.value)
    const validAll = computed(() => validName.value && validFile.value)

    const fileBrowser = (evt: any) => {
      dockerCompose.value = evt.target.files[0]
    }

    const save = async () => {
      const { post, patch } = useHttpClient()
      const request = editMode.value ? patch : post

      if (validAll.value) {
        const data = new FormData()
        data.append('name', name.value)
        data.append('up', up.value)
        data.append('down', down.value)
        if (dockerCompose.value)
          data.append('dockerCompose', dockerCompose.value)

        const result = await request<ICreateProjectResult, FormData>(
          'project',
          data
        )
        if (result) {
          // TODO: Toast
          alert(`The project '${result.name}' has been created successfully.`)
          router.push('/')
        }
      }
    }

    return {
      name,
      up,
      down,
      editMode,
      fileBrowser,
      save,
      validName,
      validFile,
      validAll,
    }
  },
})
</script>
