<script setup lang="ts">
import { useTasks } from '@store/useTasks'
import { ref } from 'vue'
import TaskCard from '@/components/TaskCard.vue'
import type { Column } from '@/types'
import { useColumns } from '@/store/useColumns'

const props = defineProps<{
  column: Column
}>()
const { addTask } = useTasks()
const newTaskTitle = ref('')
const editTitle = ref(false)
const { updateTitle } = useColumns()
const columnTitle = ref('')

function createTask() {
  if (newTaskTitle.value === '')
    return
  addTask(newTaskTitle.value, props.column.id)
  newTaskTitle.value = ''
}
function updateTitleHandler() {
  editTitle.value = !editTitle.value
  if (columnTitle.value === '')
    return

  updateTitle(props.column.id, columnTitle.value)
  columnTitle.value = ''
}
</script>

<template>
  <main class="h-max w-40 m-4 p-2 rounded-5 bg-red shadow-xl shadow-sm text-center">
    <div v-if="editTitle" w-full flex>
      <input v-model="columnTitle" :placeholder="columnTitle" class="w-full bg-transparent text-center">
      <button @click="updateTitleHandler">&#10004;</button>
    </div>
    <div v-else w-full flex justify-between>
      <h2 class="w-full text-center text-2xl">{{ props.column.title }}</h2>
      <button class="w-auto" @click="updateTitleHandler">&#9997;</button>
    </div>
    <div id="tasks">
      <TaskCard v-for="task in column.tasks" :key="task.id" :task="task" :column-id="props.column.id" />
    </div>
    <input v-model="newTaskTitle" type="text" w-full placeholder="Task Title">
    <button @click="createTask">Add Task</button>
  </main>
</template>
