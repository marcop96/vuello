<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTasks } from '@/store/useTasks'
import type { Tag } from '@/types'

const { selectedTask, tags } = useTasks()

const selectedTag = ref<Tag | null>(null)
const closeModal = () => {
  selectedTask.value = null
}

const onChangeHandler = (tag: Tag) => {
  selectedTask.value?.tags.push(tag)
  // if (selectedTask.value?.tags.includes(tag)) {
  //   // Handle the case when the tag is already included
  //   selectedTask.value.tags = selectedTask.value.tags.filter(t => t.title !== tag.title)
  // }
  // else {
  //   // Push the tag to the tags array
  //   selectedTask.value?.tags?.push(tag)
  // }
}

const filteredTags = computed(() => {
  if (!selectedTask.value?.tags)
    return tags.value

  return tags.value.filter((tag: Tag) => !selectedTask.value?.tags?.includes(tag))
})

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
      <div class="modal-content">
        <textarea v-model="selectedTask.description" placeholder="description" bg-gray w-xl resize-none />
        <div class="flex justify-between items-center mt-16px">
          <div class="flex items-center">
            <input v-model="selectedTask.completed" type="checkbox" @click="toggleCompleted">
            <label class="ml-8px">Completed</label>
          </div>

          <div>
            <div v-for="tag in selectedTask.tags" id="tags" :key="tag.title" :class="tag.bg">{{ tag.title }}</div>

            <select :disabled="filteredTags.length === 0" @change="$e => console.log($e.target) ">
              <option v-for="(tag, index) in filteredTags" :key="index" :value="tag">{{ tag }}</option>
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
