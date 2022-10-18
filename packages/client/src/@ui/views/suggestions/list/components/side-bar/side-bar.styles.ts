import styled from 'styled-components'
import { PAGE_WIDTH } from '../../list.styles'

export class SuggestionsSideBarStyles {
    static Container = styled.div`
        display: flex;
        flex-direction: column;
        gap: ${(p) => p.theme.grid.xl};

        @media (max-width: ${PAGE_WIDTH}) {
            flex-direction: row;
            align-items: stretch;
        }
    `

    static GradientBox = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: ${(p) => p.theme.grid.md};
        border-radius: ${(p) => p.theme.borderRadius};
        background: radial-gradient(
            128.88% 128.88% at 103.9% -10.39%,
            #e84d70 0%,
            #a337f6 53.09%,
            #28a7ed 100%
        );
        box-sizing: border-box;

        @media (min-width: ${PAGE_WIDTH}) {
            height: 137px;
        }

        @media (max-width: ${PAGE_WIDTH}) {
            flex: 1;
        }
    `

    static Box = styled.div`
        padding: ${(p) => p.theme.grid.lg};
        border-radius: ${(p) => p.theme.borderRadius};
        background-color: ${(p) => p.theme.palette.surface};

        @media (max-width: ${PAGE_WIDTH}) {
            flex: 1;
        }
    `
}
