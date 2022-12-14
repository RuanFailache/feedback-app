import styled, { DefaultTheme } from 'styled-components'

interface IStyledButton {
    hasBackground?: boolean
    bgColor?: keyof DefaultTheme['palette']
}

export const StyledButton = styled.button<IStyledButton>`
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 16px 32px;
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    cursor: pointer;

    background-color: ${(props) =>
        props.hasBackground
            ? props.theme.palette[props.bgColor ?? 'primary']
            : 'transparent'};

    &:hover {
        filter: brightness(110%);
    }
`
