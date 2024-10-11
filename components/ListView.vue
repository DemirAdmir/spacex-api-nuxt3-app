<template>
  <div
    :style="{
      backgroundColor: 'var(--background-color)',
      color: 'var(--text-color)',
    }"
  >
    <ListItem
      v-for="launch in launches"
      :key="launch.flightNumber || launch._id"
      :launch="launch"
      :actionLabel="actionLabel"
      :buttonType="buttonType"
      @actionClick="onActionClick"
    />
  </div>
</template>

<script setup lang="ts">
import type { ListViewProps } from "../interfaces/ListViewProps";

const props = defineProps<ListViewProps>();
</script>
<style scoped>
div {
  transition: background-color 0.3s, color 0.3s;
}
</style>
