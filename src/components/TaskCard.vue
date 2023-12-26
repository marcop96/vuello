<script setup lang="ts">
import type { Task } from '@/types'
import { useTasks } from '@/store/useTasks'

const props = defineProps<{
  task: Task
  columnId: number
}>()
const { removeTask, selectTask } = useTasks()
function viewTask() {
  selectTask(props.task.id, props.columnId)
}
</script>

<template>
  <div :class="!task.completed ? 'bg-red hover:bg-red-5' : 'bg-green hover:bg-green-5'" class="h-max w-full flex justify-between rounded-5 shadow-sm text-center" @click="viewTask">
    <h3 hover:cursor-pointer hover:rounded-sm p-2 text-xl>{{ task.title }}</h3>

    <button
      class="p-2"

      @click="removeTask(task.id, props.columnId)"
    >
      &times;
    </button>
  </div>
</template>
