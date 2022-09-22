import { useSuggestionContext } from '../../suggestions.context'
import { SuggestionCard } from './components/card'
import { FilledCardListStyles } from './filled-card-list.styles'

export const SuggestionsFilledCardList = function () {
    const { suggestions } = useSuggestionContext()
    return (
        <FilledCardListStyles.List>
            {suggestions.map((suggestion) => (
                <SuggestionCard
                    key={suggestion.id}
                    suggestion={suggestion}
                />
            ))}
        </FilledCardListStyles.List>
    )
}
