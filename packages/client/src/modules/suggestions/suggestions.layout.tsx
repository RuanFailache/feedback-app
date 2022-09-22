import { PropsWithChildren } from 'react'
import { SuggestionsHeader } from './components/header'
import { SuggestionsSideBar } from './components/side-bar'
import { SuggestionsStyles } from './suggestions.styles'

export const SuggestionsPageLayout = function ({
    children,
}: PropsWithChildren) {
    return (
        <SuggestionsStyles.MainContainer>
            <SuggestionsStyles.PositionedSideBar>
                <SuggestionsSideBar />
            </SuggestionsStyles.PositionedSideBar>
            <SuggestionsStyles.PositionedMainContent>
                <SuggestionsHeader />
                {children}
            </SuggestionsStyles.PositionedMainContent>
        </SuggestionsStyles.MainContainer>
    )
}
