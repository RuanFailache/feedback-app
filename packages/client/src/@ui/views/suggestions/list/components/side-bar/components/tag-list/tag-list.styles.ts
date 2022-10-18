import styled from 'styled-components'

export class SuggestionsSideBarTagListStyles {
    static List = styled.ul`
        display: flex;
        flex-wrap: wrap;
        gap: ${(p) => p.theme.grid.xs};
    `

    static Tag = styled.li<{
        selected: boolean
    }>`
        padding: ${(p) => p.theme.grid.xxs} ${(p) => p.theme.grid.md};
        border-radius: ${(p) => p.theme.borderRadius};
        background-color: ${(p) =>
            p.selected
                ? p.theme.palette.secondary
                : p.theme.palette.background};
        cursor: pointer;

        span {
            color: ${(p) =>
                p.selected
                    ? p.theme.palette.surface
                    : p.theme.palette.secondary};
        }
    `
}
