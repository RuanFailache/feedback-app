import { Comment } from './comment'

export interface Suggestion {
    id: number
    title: string
    category: string
    upvotes: number
    status: 'suggestion' | 'in-progress' | 'live' | 'planned'
    description: string
    comments?: Comment[]
}
