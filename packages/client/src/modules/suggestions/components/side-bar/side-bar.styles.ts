import styled from 'styled-components'

export class SuggestionsSideBarStyles {
    static Container = styled.div`
        display: flex;
        flex-direction: column;
        gap: ${(p) => p.theme.grid.xl};
    `

    static GradientBox = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 137px;
        padding: ${(p) => p.theme.grid.md};
        border-radius: ${(p) => p.theme.borderRadius};
        background: radial-gradient(
            128.88% 128.88% at 103.9% -10.39%,
            #e84d70 0%,
            #a337f6 53.09%,
            #28a7ed 100%
        );
        box-sizing: border-box;
    `

    static Box = styled.div`
        padding: ${(p) => p.theme.grid.lg};
        border-radius: ${(p) => p.theme.borderRadius};
        background-color: ${(p) => p.theme.palette.surface};
    `
}
