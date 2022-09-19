import { IconType } from 'react-icons'
import { StyledButton } from './button.styles'
import { ButtonHTMLAttributes } from 'react'
import { DefaultTheme } from 'styled-components'
import { theme } from '../../themes'
import { Typography } from '../typography'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    icon?: IconType
    bgColor?: keyof DefaultTheme['palette']
}

export const Button = function ({ text, icon, bgColor, ...props }: IButton) {
    const hasBackground = Boolean(bgColor)

    return (
        <StyledButton
            bgColor={bgColor ?? 'primary'}
            hasBackground={hasBackground}
            {...props}
        >
            {icon &&
                icon({
                    size: 12,
                    fill: hasBackground
                        ? theme.palette.background
                        : theme.palette.primary,
                })}
            <Typography
                as="span"
                text={text}
                variant="headline4"
                color={hasBackground ? 'onBase' : 'title'}
            />
        </StyledButton>
    )
}
