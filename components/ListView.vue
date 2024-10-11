<!-- ~/components/ListView.vue -->
<template>
  <NuxtErrorBoundary>
    <div
      :style="{
        backgroundColor: 'var(--background-color)',
        color: 'var(--text-color)',
      }"
      role="list"
      aria-label="List of launches"
    >
      <ListItem
        v-for="launch in launches"
        :key="launch.flightNumber || launch._id"
        :launch="launch"
        :actionLabel="actionLabel"
        :buttonType="buttonType"
        @actionClick="onActionClick"
        role="listitem"
      />
    </div>
  </NuxtErrorBoundary>
</template>

<script setup lang="ts">
"use strict";
import type { ListViewProps } from "../interfaces/ListViewProps";

const props = defineProps<ListViewProps>();
</script>
<style scoped>
div {
  transition: background-color 0.3s, color 0.3s;
}
</style>
