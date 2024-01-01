<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import AddTaskForm from '@/components/AddTaskForm.vue'
import type { Column } from '@/types'
import { useColumns } from '@/store/useColumns'
import TaskCard from '@/components/TaskCard.vue'

const props = defineProps<{
  column: Column
}>()

const { updateTitle, deleteColumn } = useColumns()
const columnTitle = ref('')
const editableColumnTitle = ref(false)
const columnTitleInput = ref()

function updateColumnTitleHandler() {
  onClickOutside(columnTitleInput, () => {
    editableColumnTitle.value = false
    if (columnTitle.value === '')
      return
    updateTitle(props.column.id, columnTitle.value)
    columnTitle.value = ''
  })

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
    </div>
    <div v-else w-full flex flex-col justify-between>
      <button @click="deleteColumn(props.column.id)">X</button>
      <h2 class="w-full text-center text-2xl" @click="updateColumnTitleHandler">{{ props.column.title }}</h2>
    </div>
    <div id="tasks">
      <TaskCard v-for="task in column.tasks" :key="task.id" :task="task" :column-id="props.column.id" />
      <AddTaskForm :column-id="props.column.id" />
    </div>
  </main>
</template>
