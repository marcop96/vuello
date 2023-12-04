import { ref } from 'vue'
import type { Task } from '@/types'

const tasks = ref<Task[]>([])
const selectedTask = ref<Task | null>(null)

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
    const index = tasks.value.findIndex(task => task.id === id)
    tasks.value.splice(index, 1)
  }

  const selectTask = (id: number) => {
    // add selectedTask to a variable, pass it to the component
    selectedTask.value = tasks.value.find(task => task.id === id) || null
    console.log((selectedTask.value))
  }

  return { tasks, addTask, removeTask, selectTask, selectedTask }
}
