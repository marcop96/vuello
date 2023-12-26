import { ref } from 'vue'
import type { Column } from '@/types'

const columns = ref<Column[]>([])

export function useColumns() {
  const selectedColumn = ref<Column | null>(null)

  const addColumn = (title: string) => {
    const column: Column = {
      id: globalThis.crypto.randomUUID(),
      title,
      tasks: [],
    }

    columns.value.push(column)

    return {
      column,
    }
  }

  const deleteColumn = (id: number) => {
    const index = columns.value.findIndex(column => column.id === id)
    columns.value.splice(index, 1)
  }
  const updateTitle = (id: number, title: string) => {
    const targetColumn = columns.value.find((c: Column) => c.id === id)
    if (targetColumn)
      targetColumn.title = title
  }
  return {
    columns,
    selectedColumn,
    addColumn,
    deleteColumn,
    updateTitle,
  }
}
