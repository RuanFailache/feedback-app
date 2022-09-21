import { SuggestionsHeader } from './components/header'
import { SuggestionsSideBar } from './components/side-bar'
import { SuggestionsStyles } from './suggestions.styles'

export const SuggestionsPage = () => {
    return (
        <SuggestionsStyles.MainContainer>
            <SuggestionsStyles.PositionedSideBar>
                <SuggestionsSideBar />
            </SuggestionsStyles.PositionedSideBar>
            <SuggestionsStyles.PositionedMainContent>
                <SuggestionsHeader />
            </SuggestionsStyles.PositionedMainContent>
        </SuggestionsStyles.MainContainer>
    )
}
