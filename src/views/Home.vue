<template>
  <div>
    <PageHeading>Projects</PageHeading>
    <div class="flex flex-wrap">
      <ProjectTile empty @click="addProject" />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import ProjectTile from './HomeProjectTile.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ProjectTile,
  },
  setup() {
    const router = useRouter()
    const addProject = () => {
      router.push({ path: '/project' })
    }

    return {
      addProject,
    }
  },
})
</script>
