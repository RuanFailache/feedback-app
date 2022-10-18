import { Suggestion } from '@resources/models/suggestion'

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
