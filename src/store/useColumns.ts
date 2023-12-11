import { ref } from 'vue'
import type { Column } from '@/types'

const columns = ref<Column[]>([])

export function useColumns() {
  const selectedColumn = ref<Column | null>(null)

  const addColumn = () => {
    const column: Column = { title: 'title', id: columns.value.length + 1, tasks: [] }

    columns.value.push(column)
  }

  const deleteColumn = (id: number) => {
    const index = columns.value.findIndex(column => column.id === id)
    columns.value.splice(index, 1)
  }

  return {
    columns,
    selectedColumn,
    addColumn,
    deleteColumn,
  }
}
