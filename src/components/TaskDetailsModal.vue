<script setup lang="ts">
import { useTasks } from '@/store/useTasks'

const { selectedTask, tags } = useTasks()

const closeModal = () => {
  selectedTask.value = null
}

const selectedTagHandler = (tag: string) => {
  if (selectedTask.value?.tags?.includes(tag)) {
    // Handle the case when the tag is already included
    selectedTask.value.tags = selectedTask.value.tags.filter(t => t !== tag)
  }
  else {
    // Push the tag to the tags array
    selectedTask.value?.tags?.push(tag)
  }
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
      <div class="modal-header flex justify-between items-center mb-4">
        <textarea v-model="selectedTask.title" class="text-lg font-bold m-0 h-25px" resize-none />
        <button class="text-gray-600 hover:text-gray-800 border-0 cursor-pointer font-18px" @click="closeModal">
          &times;
        </button>
      </div>
      <div class="modal-content" mt-16px>
        <textarea v-model="selectedTask.description" placeholder="description" bg-gray w-xl resize-none />
        <div class="flex justify-between items-center mt-16px">
          <div class="flex items-center">
            <input v-model="selectedTask.completed" type="checkbox" @click="toggleCompleted">
            <label class="ml-8px">Completed</label>
          </div>
          <div class="flex items-center">
            <label class="mr-8px">Due Date</label>
            <input type="date">
          </div>
          <div>
            TAGS: {{ selectedTask.tags }}
            <select v-model="selectedTag" @change="selectedTagHandler(selectedTag)">
              <option v-for="tag in tags" :key="tag.title" :value="tag.title">{{ tag.title }}</option>
            </select>
          </div>
        </div>
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
