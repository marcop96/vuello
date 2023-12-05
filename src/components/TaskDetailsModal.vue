<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useTasks } from '@/store/useTasks'

export default defineComponent({
  name: 'TaskDetailsModal',
  setup() {
    const { selectedTask } = useTasks()
    const showModal = ref(selectedTask.value !== null)
    watch(selectedTask, (newValue) => {
      showModal.value = newValue !== null
    })

    const closeModal = () => {
      selectedTask.value = null
    }

    const toggleCompleted = () => {
      if (!selectedTask.value)
        return
      selectedTask.value.completed = !selectedTask.value.completed
    }
    return {
      showModal,
      selectedTask,
      // title: selectedTask.value?.title,
      // completed: selectedTask.value?.completed,
      // tags: selectedTask.value?.tags,
      // description: selectedTask.value?.description,
      closeModal,
      toggleCompleted,
    }
  },
})
</script>

<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal" w-3xl>
      <div class="modal-header flex justify-between  items-center mb-4">
        <h2 class="text-lg font-bold m-0">{{ selectedTask?.title }}</h2>
        <button class="text-gray-600 hover:text-gray-800 border-0 cursor-pointer font-18px" @click="closeModal">
          &times;
        </button>
      </div>
      <div class="modal-content" mt-16px>
        <textarea v-model="selectedTask.description" placeholder="description" bg-gray w-xl />
        <div> TAGS: {{ selectedTask?.tags }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  padding: 20px;
  border-radius: 8px;
  background: white;
  overflow-y: auto;
}
</style>
