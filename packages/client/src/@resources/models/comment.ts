import { Reply } from './reply'
import { User } from './user'

export interface Comment {
    id: number
    content: string
    user: User
    replies?: Reply[]
}
