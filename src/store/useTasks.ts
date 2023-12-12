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
  }

  const removeTask = (id: number, columnId: number) => {
    const targetColumn = columns.value.find((c: Column) => c.id === columnId)

    if (targetColumn) {
      const targetTask = targetColumn.tasks.find((t: Task) => t.id === id)

      if (targetTask) {
        const index = targetColumn.tasks.indexOf(targetTask)
        targetColumn.tasks.splice(index, 1)
      }
    }
  }

  const selectTask = (id: number, columnId: number) => {
    const targetColumn = columns.value.find((c: Column) => c.id === columnId)
    selectedTask.value = targetColumn?.tasks.find((t: Task) => t.id === id) || null
  }

  return { tasks, addTask, removeTask, selectTask, selectedTask }
}
