<script setup lang="ts">
import type { Task } from '@/types'
import { useTasks } from '@/store/useTasks'

defineProps<{
  task: Task
}>()
const { removeTask } = useTasks()

function viewTask() {
// should open modal with task details
  console.log('view task')
}
</script>

<template>
  <div class="bg-blue h-max rounded-5 shadow-sm text-center">
    <h3 hover:cursor-pointer @click="viewTask">{{ task.title }}</h3>
    <p>
      {{ task.id }}
    </p>
    <button @click="removeTask(task.id)">X</button>
  </div>
</template>
