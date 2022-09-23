import { Suggestion } from '@/app-commons/models/suggestion'
import {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'

import {
    DISPLAY_ALL_CATEGORIES,
    INITIAL_CONTEXT_STATE,
    SuggestionsSortType,
} from './suggestions.constants'

import {
    SuggestionsContextProps,
    SuggestionsProviderProps,
} from './suggestions.interfaces'

const SuggestionContext = createContext<SuggestionsContextProps>(
    INITIAL_CONTEXT_STATE
)

export const SuggestionProvider = function ({
    children,
    suggestions: allSuggestions,
}: PropsWithChildren<SuggestionsProviderProps>) {
    const initialSuggestionsState = useMemo(() => {
        return allSuggestions.filter(
            (suggestion) => suggestion.status === 'suggestion'
        )
    }, [allSuggestions])

    const [category, setCategory] = useState(DISPLAY_ALL_CATEGORIES)
    const [suggestions, setSuggestions] = useState(initialSuggestionsState)

    const categories = useMemo(() => {
        const arr: string[] = []
        for (let suggestion of suggestions) {
            if (arr.includes(suggestion.category)) continue
            arr.push(suggestion.category)
        }
        return [DISPLAY_ALL_CATEGORIES, ...arr]
    }, [initialSuggestionsState])

    const filterByCategory = useCallback(
        (category: string) => {
            if (!categories.includes(category)) {
                throw new Error('Invalid category provided')
            }

            setCategory(category)

            if (category === DISPLAY_ALL_CATEGORIES) {
                setSuggestions(initialSuggestionsState)
            } else {
                const filteredSuggestions = initialSuggestionsState.filter(
                    (suggestion) => suggestion.category === category
                )
                setSuggestions(filteredSuggestions)
            }
        },
        [initialSuggestionsState]
    )

    const sortTypeChanged = (type: string) => {
        const sortedArray = [...suggestions]
        const sortModes = {
            [SuggestionsSortType.leastUpvotes]: () =>
                sortedArray.sort((prev, curr) => {
                    return prev.upvotes - curr.upvotes
                }),
            [SuggestionsSortType.leastComments]: () =>
                sortedArray.sort((prev, curr) => {
                    const prevLength = prev.comments?.length ?? 0
                    const currLength = curr.comments?.length ?? 0
                    return prevLength - currLength
                }),
            [SuggestionsSortType.mostComments]: () =>
                sortedArray.sort((prev, curr) => {
                    const prevLength = prev.comments?.length ?? 0
                    const currLength = curr.comments?.length ?? 0
                    return currLength - prevLength
                }),
            [SuggestionsSortType.mostUpvots]: () =>
                sortedArray.sort((prev, curr) => {
                    return curr.upvotes - prev.upvotes
                }),
        }
        sortModes[type as SuggestionsSortType]()
        setSuggestions(sortedArray)
    }

    return (
        <SuggestionContext.Provider
            value={{
                category,
                categories,
                suggestions,
                sortTypeChanged,
                filterByCategory,
                amount: suggestions.length,
                hasSuggestions: suggestions.length > 0,
            }}
        >
            {children}
        </SuggestionContext.Provider>
    )
}

export const useSuggestionContext = function () {
    return useContext(SuggestionContext)
}
