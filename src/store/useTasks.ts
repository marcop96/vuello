import { ref } from 'vue'

import type { Task } from '@/types'

const tasks = ref<Task[]>([])

export function useTasks() {
  const addTask = (title: string) => {
    const task = {
      title,
      id: tasks.value.length + 1,
      completed: false,
    }
    tasks.value.push(task)
  }

  return { addTask, tasks }
}
