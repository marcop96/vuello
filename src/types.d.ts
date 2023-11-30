export interface Task {
  id: number
  title: string
  description?: string
  dueDate?: Date
  tags?: string[]
  completed?: boolean
}
