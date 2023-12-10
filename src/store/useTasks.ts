import { ref } from 'vue'
import type { Task } from '@/types'

const tasks = ref<Task[]>([])
const selectedTask = ref<Task | null>(null)

export function useTasks() {
  const addTask = (title: string) => {
    const task: Task = {
      id: tasks.value.length + 1,
      title,
      description: '',
      completed: false,

    }
    tasks.value.push(task)
  }

  const removeTask = (id: number) => {
    const index = tasks.value.findIndex(task => task.id === id)
    tasks.value.splice(index, 1)
  }

  const selectTask = (id: number) => {
    selectedTask.value = tasks.value.find(task => task.id === id) || null
  }

  return { tasks, addTask, removeTask, selectTask, selectedTask }
}
