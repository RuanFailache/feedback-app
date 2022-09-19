import styled, { DefaultTheme } from 'styled-components'

interface IStyledButton {
    hasBackground?: boolean
    bgColor: keyof DefaultTheme['palette']
}

export const StyledButton = styled.button<IStyledButton>`
    display: flex;
    align-items: center;
    gap: 20px;

    padding: 16px 32px;
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};

    background-color: ${(props) =>
        props.hasBackground
            ? 'transparent'
            : props.theme.palette[props.bgColor]};

    &:hover {
        filter: brightness(110%);
    }
`
