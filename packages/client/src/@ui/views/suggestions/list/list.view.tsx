import { SuggestionsEmptyCardList } from './components/empty-card-list'
import { SuggestionsFilledCardList } from './components/filled-card-list'
import { SuggestionsHeader } from './components/header'
import { SuggestionsSideBar } from './components/side-bar'
import { useSuggestionContext } from './list.context'
import { SuggestionsStyles } from './list.styles'

export const SuggestionsListView = function () {
    const { hasSuggestions } = useSuggestionContext()

    return (
        <SuggestionsStyles.MainContainer>
            <SuggestionsStyles.PositionedSideBar>
                <SuggestionsSideBar />
            </SuggestionsStyles.PositionedSideBar>
            <SuggestionsStyles.PositionedMainContent>
                <SuggestionsHeader />
                {hasSuggestions ? (
                    <SuggestionsFilledCardList />
                ) : (
                    <SuggestionsEmptyCardList />
                )}
            </SuggestionsStyles.PositionedMainContent>
        </SuggestionsStyles.MainContainer>
    )
}
