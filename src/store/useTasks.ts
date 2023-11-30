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

  const removeTask = (id: number) => {
    console.log((id))
    const index = tasks.value.findIndex(task => task.id === id)
    tasks.value.splice(index, 1)
  }

  return { tasks, addTask, removeTask }
}
