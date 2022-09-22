import styled from 'styled-components'

const PAGE_WIDTH = '1110px'
const SIDE_BAR_WIDTH = '254px'
const MAIN_CONTENT_WIDTH = '824px'

export class SuggestionsStyles {
    static MainContainer = styled.div`
        width: ${PAGE_WIDTH};
        margin: 0 auto;
        position: relative;
    `

    static PositionedSideBar = styled.aside`
        position: fixed;
        top: ${(p) => p.theme.grid.xxl};
        left: calc((100% - ${PAGE_WIDTH}) / 2);
        width: ${SIDE_BAR_WIDTH};
    `

    static PositionedMainContent = styled.div`
        position: absolute;
        top: ${(p) => p.theme.grid.xxl};
        left: ${255 + 32}px;
        display: flex;
        flex-direction: column;
        gap: ${(p) => p.theme.grid.xl};
        width: ${MAIN_CONTENT_WIDTH};
        padding-bottom: ${(p) => p.theme.grid.xl};
    `
}
