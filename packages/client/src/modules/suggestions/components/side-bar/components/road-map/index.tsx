import { Typography } from '../../../../../../common/components/typography'
import { PaletteTheme } from '../../../../../../styled'
import { SuggestionsSideBarStyles } from '../../side-bar.styles'
import { SuggestionsSideBarRoadMapStyles } from './road-map.styles'

const colors: PaletteTheme[] = ['maya', 'primary', 'tangerine']

export const SuggestionsSideBarRoadMap = function () {
    return (
        <SuggestionsSideBarStyles.Box>
            <SuggestionsSideBarRoadMapStyles.Header>
                <Typography
                    text="Roadmap"
                    variant="headline3"
                    color="title"
                />
                <Typography
                    text="View"
                    variant="body3"
                    color="secondary"
                    underlined
                />
            </SuggestionsSideBarRoadMapStyles.Header>

            <SuggestionsSideBarRoadMapStyles.List>
                {[
                    { label: 'Planned', value: 2 },
                    { label: 'In-Progress', value: 3 },
                    { label: 'Live', value: 1 },
                ].map((item, index) => (
                    <SuggestionsSideBarRoadMapStyles.Item
                        itemColor={colors[index]}
                    >
                        <div>
                            <span />
                            <Typography text={item.label} />
                        </div>
                        <Typography text={item.value.toString()} />
                    </SuggestionsSideBarRoadMapStyles.Item>
                ))}
            </SuggestionsSideBarRoadMapStyles.List>
        </SuggestionsSideBarStyles.Box>
    )
}
