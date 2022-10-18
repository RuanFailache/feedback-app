import styled from 'styled-components'

export class SuggestionsHeaderStyles {
    static Container = styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: ${(p) => p.theme.grid.sm} ${(p) => p.theme.grid.lg};
        border-radius: ${(p) => p.theme.borderRadius};
        background-color: ${(p) => p.theme.palette.tertiary};
        box-sizing: border-box;
    `

    static Content = styled.div`
        display: flex;
        align-items: center;
        gap: ${(p) => p.theme.grid.xl};
    `

    static Info = styled.div`
        display: flex;
        align-items: center;
        gap: ${(p) => p.theme.grid.md};
    `
}
