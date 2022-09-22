import { Suggestion } from '@/app-commons/models/suggetion'
import { createContext, PropsWithChildren, useContext, useMemo } from 'react'

interface ContextProps {
    amount: number
    hasSuggestions: boolean
    suggestions: Suggestion[]
}

const INITIAL_CONTEXT_STATE: ContextProps = {
    amount: 0,
    suggestions: [],
    hasSuggestions: false,
}

const SuggestionContext = createContext<ContextProps>(INITIAL_CONTEXT_STATE)

interface ProviderProps {
    suggestions: Suggestion[]
}

export const SuggestionProvider = function ({
    children,
    suggestions,
}: PropsWithChildren<ProviderProps>) {
    return (
        <SuggestionContext.Provider
            value={{
                suggestions,
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
