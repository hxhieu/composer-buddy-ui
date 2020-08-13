<template>
  <div>
    <PageHeading>Projects</PageHeading>
    <div class="flex flex-wrap">
      <ProjectTile empty />
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
import ProjectTile from './HomeProjectTile.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ProjectTile,
  },
})
</script>