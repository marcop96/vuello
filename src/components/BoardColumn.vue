<script setup lang="ts">
import { useTasks } from '@store/useTasks'
import { ref } from 'vue'
import TaskCard from '@/components/TaskCard.vue'
import type { Column } from '@/types'

defineProps<{
  column: Column
}>()
const { addTask, tasks } = useTasks()
const newTaskTitle = ref('')

function createTask() {
  if (newTaskTitle.value === '')
    return
  addTask(newTaskTitle.value)
  newTaskTitle.value = ''
}
</script>

<template>
  <main class="h-max w-40 m-4 p-2 rounded-5 bg-red shadow-xl shadow-sm text-center">
    <h2>{{ column.title }}</h2>
    <div id="tasks">
      <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
    </div>
    <input v-model="newTaskTitle" type="text" w-full placeholder="add task">
    <button @click="createTask">create task</button>
  </main>
</template>
