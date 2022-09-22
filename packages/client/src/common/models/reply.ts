import { User } from './user'

export interface Reply {
    content: string
    replyingTo: string
    user: User
}
