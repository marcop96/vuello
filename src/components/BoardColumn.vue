<script setup lang="ts">
import { useTasks } from '@store/useTasks'
import { ref } from 'vue'
import { useFocus } from '@vueuse/core'
import TaskCard from '@/components/TaskCard.vue'
import type { Column } from '@/types'
import { useColumns } from '@/store/useColumns'

const props = defineProps<{
  column: Column
}>()
const { addTask } = useTasks()
const { updateTitle } = useColumns()
const newTaskTitle = ref('')
const columnTitle = ref('')
const editableColumnTitle = ref(false)

function createTask() {
  if (newTaskTitle.value === '')
    return
  addTask(newTaskTitle.value, props.column.id)
  newTaskTitle.value = ''
}
function updateColumnTitleHandler() {
  editableColumnTitle.value = !editableColumnTitle.value
  if (columnTitle.value === '')
    return

  updateTitle(props.column.id, columnTitle.value)
  columnTitle.value = ''
}
</script>

<template>
  <main class="h-max w-40 m-4 p-2 rounded-5 bg-red shadow-xl shadow-sm text-center">
    <div v-if="editableColumnTitle" w-full flex>
      <input v-model="columnTitle" :placeholder="columnTitle" class="w-full bg-transparent text-center" @keydown.enter="updateColumnTitleHandler">
      <button>&#10004; </button>
    </div>
    <div v-else w-full flex justify-between>
      <h2 class="w-full text-center text-2xl" @click="updateColumnTitleHandler">{{ props.column.title }}</h2>
    </div>
    <div id="tasks">
      <TaskCard v-for="task in column.tasks" :key="task.id" :task="task" :column-id="props.column.id" />
    </div>
    <input v-model="newTaskTitle" type="text" w-full placeholder="Task Title" @keydown.enter="createTask">
    <button @click="createTask">Add Task</button>
  </main>
</template>
