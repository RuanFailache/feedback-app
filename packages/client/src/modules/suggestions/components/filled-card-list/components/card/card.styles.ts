import styled from 'styled-components'

export class SuggestionCardStyles {
    static Container = styled.li`
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        padding: ${(p) => p.theme.grid.lg};
        border-radius: ${(p) => p.theme.borderRadius};
        background-color: ${(p) => p.theme.palette.surface};
        box-sizing: border-box;
    `

    static Tag = styled.div`
        width: fit-content;
        padding: ${(p) => p.theme.grid.xs};
        border-radius: ${(p) => p.theme.borderRadius};
        background-color: ${(p) => p.theme.palette.background};
    `

    static UpvoteButton = styled.button`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: ${(p) => p.theme.grid.xxs};
        width: 40px;
        padding: ${(p) => p.theme.grid.xs};
        border: none;
        border-radius: ${(p) => p.theme.borderRadius};
        background-color: ${(p) => p.theme.palette.background};
    `

    static Content = styled.div`
        display: flex;
        align-items: flex-start;
        gap: ${(p) => p.theme.grid.xl};
    `

    static TextBox = styled.div`
        display: flex;
        flex-direction: column;
        gap: ${(p) => p.theme.grid.xs};
        width: 100%;
    `

    static CommentBox = styled.button`
        display: flex;
        align-items: center;
        gap: ${(p) => p.theme.grid.xs};
        width: fit-content;
        border-radius: ${(p) => p.theme.borderRadius};
        border: none;
        background-color: transparent;
    `
}
