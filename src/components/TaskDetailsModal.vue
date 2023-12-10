<script setup lang="ts">
import { useTasks } from '@/store/useTasks'

// Variables
// Methods
// Computeds
// Lifecycle Hooks
// Watchers

const { selectedTask } = useTasks()

const closeModal = () => {
  selectedTask.value = null
}

const toggleCompleted = () => {
  if (!selectedTask.value)
    return
  selectedTask.value.completed = !selectedTask.value.completed
}
</script>

<template>
  <div v-if="selectedTask" class="modal-overlay">
    <div class="modal" w-3xl>
      <div class="modal-header" flex="~ justify-between items-center" mb-4>
        <textarea v-model="selectedTask.title" text-lg font-bold h-6 resize-none />
        <button text="lg gray-600 hover:gray-800" border-0 cursor-pointer @click="closeModal">
          &times;
        </button>
      </div>
      <div class="modal-content">
        <textarea v-model="selectedTask.description" placeholder="description" bg-gray w-xl resize-none />
        <div flex="~ justify-between items-center" mt-4>
          <div class="flex items-center">
            <input v-model="selectedTask.completed" type="checkbox" @click="toggleCompleted">
            <label ml-2>Completed</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: rgb(0 0 0 / 50%);
}

.modal {
  position: relative;
  max-width: 80%;
  max-height: 80%;
  padding: rem(20px);
  border-radius: 8px;
  background: white;
  overflow-y: auto;
}
</style>
