// Assuming your types.ts file looks like this

// types.ts
//
//
type TagName = 'Work' | 'Personal' | 'Shopping' | 'Health' | 'Home'

export interface Tag {
  title: TagName
}

export interface Task {
  id: number
  title: string
  description: string
  completed: boolean
  tags: Tag[]
}
