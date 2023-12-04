<script setup lang='ts'>
import { useTasks } from '@/store/useTasks'

const { selectedTask } = useTasks()
</script>

<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal p-4">
      <div class="modal-header flex justify-between items-center mb-4">
        <h2 class="text-lg font-bold">{{ selectedTask.title }}</h2>
        <button class="text-gray-600 hover:text-gray-800" @click="closeModal">
          &times;
        </button>
      </div>
      <div class="modal-content">
        {{
          selectedTask
            ? `Selected task: ${selectedTask.title}`
            : 'No task selected'
        }}        <slot />
      </div>
    </div>
  </div>
</template>
