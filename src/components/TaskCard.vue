<script setup lang="ts">
import type { Task } from '@/types'
import { useTasks } from '@/store/useTasks'

const props = defineProps<{
  task: Task
}>()
const { removeTask, selectTask } = useTasks()

function viewTask() {
  selectTask(props.task.id)
}
</script>

<template>
  <div class="bg-blue h-max rounded-5 shadow-sm text-center">
    <h3 hover:cursor-pointer hover:bg-blue-5 hover:rounded-xl @click="viewTask">{{ task.title }}</h3>
    <p>
      {{ task.id }}
    </p>
    <button @click="removeTask(task.id)">X</button>
  </div>
</template>
