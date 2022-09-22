import { Suggestion } from '@/app-commons/models/suggestion'
import {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react'

interface ContextProps {
    amount: number
    categories: string[]
    hasSuggestions: boolean
    suggestions: Suggestion[]
    category: string
    filterByCategory: (category: string) => void
}

const DISPLAY_ALL_CATEGORIES = 'All'

const INITIAL_CONTEXT_STATE: ContextProps = {
    amount: 0,
    suggestions: [],
    hasSuggestions: false,
    categories: [],
    category: DISPLAY_ALL_CATEGORIES,
    filterByCategory: (category) => {},
}

const SuggestionContext = createContext<ContextProps>(INITIAL_CONTEXT_STATE)

interface ProviderProps {
    suggestions: Suggestion[]
}

export const SuggestionProvider = function ({
    children,
    suggestions: allSuggestions,
}: PropsWithChildren<ProviderProps>) {
    const initialSuggestionsState = useMemo(() => {
        return allSuggestions.filter(
            (suggestion) => suggestion.status === 'suggestion'
        )
    }, [allSuggestions])

    const [suggestions, setSuggestions] = useState(initialSuggestionsState)

    const [category, setCategory] = useState(DISPLAY_ALL_CATEGORIES)

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

    return (
        <SuggestionContext.Provider
            value={{
                categories,
                suggestions,
                filterByCategory,
                category,
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
