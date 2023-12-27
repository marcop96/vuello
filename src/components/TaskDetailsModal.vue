<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import { useTasks } from '@/store/useTasks'

const { selectedTask } = useTasks()

const closeModal = () => {
  selectedTask.value = null
}

const toggleCompleted = () => {
  if (!selectedTask.value)
    return
  selectedTask.value.completed = !selectedTask.value.completed
}

const target = ref(null)

onMounted(() => {
  onClickOutside(target, () => closeModal())
})
</script>

<template>
  <div v-if="selectedTask" class="overlay">
    <div ref="target" class="modal" style="max-width: 80%; max-height: 80%;">
      <div class="modal-header">
        <textarea v-model="selectedTask.title" placeholder="Task Title" class="text-lg font-bold h-6 resize-none" />
        <button class="close-button" @click="closeModal">&times;</button>
      </div>
      <div class="modal-content">
        <textarea v-model="selectedTask.description" placeholder="Description" class="bg-gray w-full resize-none" />
        <div class="completion-checkbox" flex="~ justify-between items-center" mt-4>
          <div class="flex items-center">
            <input v-model="selectedTask.completed" type="checkbox" @click="toggleCompleted">
            <label class="ml-8px">Completed</label>
          </div>
          <div />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.overlay {
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
  padding: 1.25rem;
  border-radius: 8px;
  background: white;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.close-button {
  border: 0;
  background: none;
  color: gray;
  cursor: pointer;
  font-size: 1.5rem;
}

.completion-checkbox {
  margin-top: 1rem;

}
</style>
