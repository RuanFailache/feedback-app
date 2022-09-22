import styled from 'styled-components'

export class FilledCardListStyles {
    static List = styled.ul`
        display: flex;
        flex-direction: column;
        gap: ${(p) => p.theme.grid.lg};
    `
}
