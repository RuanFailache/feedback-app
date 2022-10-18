import { PaletteTheme } from 'styled-components'

import { SuggestionsSideBarStyles } from '../../side-bar.styles'
import { SuggestionsSideBarRoadMapStyles } from './road-map.styles'

import { Typography } from '@ui/components'

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
                        key={item.label}
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
