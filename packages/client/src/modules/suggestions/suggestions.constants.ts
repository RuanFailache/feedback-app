import { SuggestionsContextProps } from './suggestions.interfaces'

export enum SuggestionsSortType {
    mostComments = 'Most Comments',
    leastComments = 'Least Comments',
    mostUpvots = 'Most Upvotes',
    leastUpvotes = 'Least Upvotes',
}

export const suggestionsSortLabels = Object.values(SuggestionsSortType)

export const DISPLAY_ALL_CATEGORIES = 'All'

export const INITIAL_CONTEXT_STATE: SuggestionsContextProps = {
    amount: 0,
    suggestions: [],
    hasSuggestions: false,
    categories: [],
    category: DISPLAY_ALL_CATEGORIES,
    filterByCategory: () => {},
    sortTypeChanged: () => {},
}
