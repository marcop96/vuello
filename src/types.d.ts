// Assuming your types.ts file looks like this

// types.ts

export interface Tag {
  title: string
  color: string
}

export interface Task {
  id: number
  title: string
  description: string
  completed: boolean
  tags: Tag[]
}
