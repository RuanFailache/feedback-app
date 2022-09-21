import { Typography } from '../../../../common/components/typography'
import { SuggestionsSideBarRoadMap } from './components/road-map'
import { SuggestionsSideBarTagList } from './components/tag-list'
import { SuggestionsSideBarStyles } from './side-bar.styles'

export const SuggestionsSideBar = function () {
    return (
        <SuggestionsSideBarStyles.Container>
            <SuggestionsSideBarStyles.GradientBox>
                <Typography
                    text="Frontend Mentor"
                    variant="headline2"
                    color="onBase"
                />
                <Typography
                    text="Feedback Board"
                    variant="body2"
                    color="onBase"
                />
            </SuggestionsSideBarStyles.GradientBox>
            <SuggestionsSideBarTagList />
            <SuggestionsSideBarRoadMap />
        </SuggestionsSideBarStyles.Container>
    )
}