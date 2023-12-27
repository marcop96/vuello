<script setup lang="ts">
import { UseDraggable } from '@vueuse/components'
import type { Task } from '@/types'
import { useTasks } from '@/store/useTasks'

const props = defineProps<{
  task: Task
  columnId: string
}>()
const { removeTask, selectTask } = useTasks()
function viewTask() {
  selectTask(props.task.id, props.columnId)
}
</script>

<template>
  <UseDraggable
    :data="props.task"
    :options="{ dropzoneSelector: '.dropzone' }"
    draggable="true"
    @dragstart="console.log('dragstart')"
    @dragend="console.log('dragend')"
  >
    <ul>
      <li :class="!task.completed ? 'bg-red hover:bg-red-5' : 'bg-green hover:bg-green-5'" class="h-max w-full flex justify-between rounded-5 shadow-sm text-center text-clip" @click="viewTask">
        <h3 hover:cursor-pointer hover:rounded-sm p-2 text-xl truncate>{{ task.title }}</h3>
        <button
          class="p-2" @click="removeTask(task.id, props.columnId)"
        >
          &times;
        </button>
      </li>
    </ul>
  </UseDraggable>
</template>
