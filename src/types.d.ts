export interface Task {
  id: string
  title: string
  description: string
  completed: boolean

}
export interface Columns {
  id: number
  column: Column[]

}
export interface Column {

  id: string
  title: string
  tasks: Task[]

}
