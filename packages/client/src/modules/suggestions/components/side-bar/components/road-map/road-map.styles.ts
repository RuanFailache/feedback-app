import styled from 'styled-components'
import { PaletteTheme } from '../../../../../../styled'

export class SuggestionsSideBarRoadMapStyles {
    static Header = styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `

    static List = styled.ul`
        display: flex;
        flex-direction: column;
        gap: ${(p) => p.theme.grid.xs};
        margin-top: ${(p) => p.theme.grid.lg};
    `

    static Item = styled.li<{
        itemColor: PaletteTheme
    }>`
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
            display: flex;
            align-items: center;
            gap: ${(p) => p.theme.grid.sm};
        }

        span {
            display: block;
            width: 8px;
            height: 8px;
            border-radius: 100%;
            background-color: ${(p) => p.theme.palette[p.itemColor]};
        }
    `
}
