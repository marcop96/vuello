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
  <div :class="!task.completed ? 'bg-red' : 'bg-green'" class="h-max rounded-5 shadow-sm text-center">
    <h3 :class="!task.completed ? 'hover:bg-red-5' : 'hover:bg-green-5'" hover:cursor-pointer hover:bg-blue-5 hover:rounded-xl @click="viewTask">{{ task.title }}</h3>

    <button @click="removeTask(task.id)">
      &times;
    </button>
  </div>
</template>
