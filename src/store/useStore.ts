import type { Task } from '@/types'
import { ref } from 'vue'

const Tasks = ref<Task>({})

export function useStore() {
  const addTask = (title) => {

  }

  return { addTask }
}
