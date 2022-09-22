import { Suggestion } from '@/app-commons/models/suggetion'
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
    selectedCategory: string
    filterByCategory: (category: string) => void
}

const DISPLAY_ALL_CATEGORIES = 'All'

const INITIAL_CONTEXT_STATE: ContextProps = {
    amount: 0,
    suggestions: [],
    hasSuggestions: false,
    categories: [],
    selectedCategory: DISPLAY_ALL_CATEGORIES,
    filterByCategory: (category) => {},
}

const SuggestionContext = createContext<ContextProps>(INITIAL_CONTEXT_STATE)

interface ProviderProps {
    suggestions: Suggestion[]
}

export const SuggestionProvider = function ({
    children,
    suggestions: initialState,
}: PropsWithChildren<ProviderProps>) {
    const [suggestions, setSuggestions] = useState(initialState)
    const [selectedCategory, setSelectedCategory] = useState(
        DISPLAY_ALL_CATEGORIES
    )

    const categories = useMemo(() => {
        const arr: string[] = []
        for (let suggestion of suggestions) {
            if (arr.includes(suggestion.category)) continue
            arr.push(suggestion.category)
        }
        return [DISPLAY_ALL_CATEGORIES, ...arr]
    }, [initialState])

    const filterByCategory = useCallback(
        (category: string) => {
            if (!categories.includes(category)) {
                throw new Error('Invalid category provided')
            }

            setSelectedCategory(category)

            if (category === DISPLAY_ALL_CATEGORIES) {
                setSuggestions(initialState)
            } else {
                const filteredSuggestions = initialState.filter(
                    (suggestion) => suggestion.category === category
                )
                setSuggestions(filteredSuggestions)
            }
        },
        [initialState]
    )

    return (
        <SuggestionContext.Provider
            value={{
                categories,
                suggestions,
                filterByCategory,
                selectedCategory,
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
