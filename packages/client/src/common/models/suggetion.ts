import { Comment } from './comment'

export interface Suggestion {
    id: number
    title: string
    category: string
    upvotes: number
    status: string
    description: string
    comments: Comment[]
}
