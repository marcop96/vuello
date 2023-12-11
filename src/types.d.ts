export interface Task {
  id: number
  title: string
  description: string
  completed: boolean

}

export interface Column {
  id: number
  title: string
  tasks?: Task[]

}
