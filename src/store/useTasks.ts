import { ref } from 'vue'
import type { Column, Task } from '@/types'
import { useColumns } from '@/store/useColumns'

const tasks = ref<Task[]>([])
const selectedTask = ref<Task | null>(null)
const { columns } = useColumns()
export function useTasks() {
  const addTask = (title: string, id: string) => {
    const targetColumn = columns.value.find((c: Column) => c.id === id)
    const task: Task = {
      id: globalThis.crypto.randomUUID(),
      title,
      description: '',
      completed: false,

    }

    if (targetColumn)

      targetColumn.tasks.push(task)

    else
      console.error(`Column with id ${columns} not found.`)
  }

  const removeTask = (id: string, columnId: string) => {
    const targetColumn = columns.value.find((c: Column) => c.id === columnId)

    if (targetColumn) {
      const targetTask = targetColumn.tasks.find((t: Task) => t.id === id)

      if (targetTask) {
        const index = targetColumn.tasks.indexOf(targetTask)
        targetColumn.tasks.splice(index, 1)
      }
    }
  }

  const selectTask = (id: string, columnId: string) => {
    const targetColumn = columns.value.find((c: Column) => c.id === columnId)
    selectedTask.value = targetColumn?.tasks.find((t: Task) => t.id === id) || null
  }

  return { tasks, addTask, removeTask, selectTask, selectedTask }
}
