<script setup lang='ts'>
import { ref } from 'vue'
import { useTasks } from '@/store/useTasks'

const props = defineProps<{
  columnId: string
}>()
const { addTask } = useTasks()
const newTaskTitle = ref('')
const errorMessage = ref('')
const errorClass = ref('')

function createTask() {
  if (newTaskTitle.value === '') {
    errorMessage.value = 'Task title cannot be empty'
    errorClass.value = 'outline-red-700 outline-4 outline'
  }
  else {
    addTask(newTaskTitle.value, props.columnId)
    newTaskTitle.value = ''
    errorClass.value = ''
  }
}
</script>

<template>
  <form @submit.prevent="createTask">
    <input v-model="newTaskTitle" :class="errorClass" type="text" rounded-full p-2 w-full placeholder="Task Title" @keydown.enter="createTask">
    <button class="mr-2 my-2 p-2 bg-blue hover:bg-blue-5 w-full rounded-lg" @click="createTask">Add Task</button>
  </form>
</template>
