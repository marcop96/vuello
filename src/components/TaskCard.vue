<script setup lang="ts">
import type { Task } from '@/types'

defineProps<{
  task: Task
}>()
</script>

<template>
  <div class="bg-blue h-max rounded-5 shadow-sm text-center">
    <p id="title" class="text-2xl">{{ task.title }}</p>
    <p id="description" class="text-sm">{{ task.completed }}</p>
  </div>
</template>
