<script setup lang="ts">
import { ref } from 'vue'
import { useTasks } from '@store/useTasks'

import type { Column } from '@/types'
import { useColumns } from '@/store/useColumns'
import TaskCard from '@/components/TaskCard.vue'

const props = defineProps<{
  column: Column
}>()
const { addTask } = useTasks()
const { updateTitle, deleteColumn } = useColumns()
const newTaskTitle = ref('')
const columnTitle = ref('')
const editableColumnTitle = ref(false)
const columnTitleInput = ref()
function createTask() {
  if (newTaskTitle.value === '')
    return
  addTask(newTaskTitle.value, props.column.id)
  newTaskTitle.value = ''
}
function updateColumnTitleHandler() {
  // doesnt work without timeout
  setTimeout(() => {
    columnTitleInput.value?.focus()
  }, 1)
  editableColumnTitle.value = !editableColumnTitle.value

  if (columnTitle.value === '')
    return

  updateTitle(props.column.id, columnTitle.value)
  columnTitle.value = ''
}
</script>

<template>
  <main class="h-max w-72 m-4 p-2 rounded-5 bg-red shadow-xl shadow-sm text-center">
    <div v-if="editableColumnTitle" w-full flex flex-col>
      <button @click="deleteColumn(props.column.id)">X</button>

      <input ref="columnTitleInput" v-model="columnTitle" :placeholder="columnTitle" class="w-full bg-transparent text-center" @keydown.enter="updateColumnTitleHandler">
      <button class="text-end" @click="openColumnModal">
        e
      </button>
    </div>
    <div v-else w-full flex flex-col justify-between>
      <button @click="deleteColumn(props.column.id)">X</button>
      <h2 class="w-full text-center text-2xl" @click="updateColumnTitleHandler">{{ props.column.title }}</h2>
    </div>
    <div id="tasks">
      <TaskCard v-for="task in column.tasks" :key="task.id" :task="task" :column-id="props.column.id" />
    </div>
    <input v-model="newTaskTitle" type="text" rounded-full p-2 w-full placeholder="Task Title" @keydown.enter="createTask">
    <button class="mr-2 my-2 p-2 bg-blue hover:bg-blue-5 w-full rounded-lg" @click="createTask">Add Task</button>
  </main>
</template>
