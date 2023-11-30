export interface Task {
  title: string
  id: number

  completed: boolean
  tags?: string[]
  description?: string
}
