<script setup lang="ts">
import { useTasks } from '@store/useTasks'
import { ref } from 'vue'
import TaskCard from '@/components/TaskCard.vue'

const { addTask, tasks } = useTasks()
const newTaskTitle = ref('')

function createTask() {
  addTask(newTaskTitle.value)
  newTaskTitle.value = ''
}
</script>

<template>
  <main class="h-max w-40 m-4 p-2 rounded-5 bg-red shadow-xl shadow-sm text-center">
    <h2>Column Title</h2>
    <div>
      <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
    </div>
    <input v-model="newTaskTitle" type="text">
    <button @click="createTask">create task</button>
  </main>
</template>
