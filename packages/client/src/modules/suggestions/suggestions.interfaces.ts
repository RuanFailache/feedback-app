import { Suggestion } from '@/app-commons/models/suggestion'
import { SuggestionsSortType } from './suggestions.constants'

export interface SuggestionsContextProps {
    amount: number
    categories: string[]
    hasSuggestions: boolean
    suggestions: Suggestion[]
    category: string
    sortTypeChanged: (type: string) => void
    filterByCategory: (category: string) => void
}

export interface SuggestionsProviderProps {
    suggestions: Suggestion[]
}
