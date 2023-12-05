import { ref } from 'vue'
import type { Task } from '@/types'

const tasks = ref<Task[]>([])
const selectedTask = ref<Task | null>(null)
const tags = ref(['easy', 'hard', 'medium'])

export function useTasks() {
  const addTask = (title: string) => {
    const task = {
      id: tasks.value.length + 1,
      title,
      description: '',
      completed: false,
      tags: [],
      dueDate: new Date(),

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

  return { tasks, addTask, removeTask, selectTask, selectedTask, tags }
}
