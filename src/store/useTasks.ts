import { ref } from 'vue'
import type { Column, Task } from '@/types'
import { useColumns } from '@/store/useColumns'

const tasks = ref<Task[]>([])
const selectedTask = ref<Task | null>(null)
const { columns } = useColumns()
export function useTasks() {
  const addTask = (title: string, id: number) => {
    const task: Task = {
      id: tasks.value.length + 1,
      title,
      description: '',
      completed: false,

    }
    const targetColumn = columns.value.find((c: Column) => c.id === id)

    if (targetColumn)

      targetColumn.tasks.push(task)

    else
      console.error(`Column with id ${columns} not found.`)

    // columns.value[targetColumn!.id].push(task)
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
