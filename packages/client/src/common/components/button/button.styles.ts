import styled from 'styled-components'
import { colors } from '../../themes/colors'

interface IStyledButton {
    hasBackground?: boolean
    bgColor: string
}

export const StyledButton = styled.button<IStyledButton>`
    display: flex;
    align-items: center;
    gap: 20px;

    padding: 16px 32px;
    border: none;
    border-radius: 10px;

    color: ${(props) => {
        if (props.hasBackground) return colors.text.title
        return colors.text.onBase
    }};

    background-color: ${(props) => {
        if (props.hasBackground) return 'transparent'
        return props.bgColor
    }};

    &:hover {
        filter: brightness(110%);
    }

    span {
        font-size: 14px;
        line-height: 20px;
        font-weight: 700;
    }
`
