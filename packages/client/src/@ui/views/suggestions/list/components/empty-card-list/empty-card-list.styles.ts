import styled from 'styled-components'

export class SuggestionsEmptyCardListStyles {
    static Container = styled.div`
        display: grid;
        place-items: center;
        height: 600px;
        border-radius: ${(p) => p.theme.borderRadius};
        background-color: ${(p) => p.theme.palette.surface};
    `

    static Content = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 410px;
        gap: ${(p) => p.theme.grid.xl};
    `

    static TextBox = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: ${(p) => p.theme.grid.sm};
    `
}
