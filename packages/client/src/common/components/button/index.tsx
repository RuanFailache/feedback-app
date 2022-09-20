import { IconType } from 'react-icons'
import { StyledButton } from './button.styles'
import { ButtonHTMLAttributes } from 'react'
import { DefaultTheme } from 'styled-components'
import { theme } from '../../themes/theme'
import { Typography } from '../typography'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    icon?: IconType
    bgColor?: keyof DefaultTheme['palette']
}

export const Button = function ({ text, icon, bgColor, ...props }: IButton) {
    const hasBackground = Boolean(bgColor)

    if (icon) {
        const Icon = icon
        return (
            <StyledButton
                bgColor={bgColor}
                hasBackground={hasBackground}
                {...props}
            >
                <Icon
                    size={14}
                    fill={
                        hasBackground
                            ? theme.palette.onBase
                            : theme.palette.secondary
                    }
                />
                <Typography
                    as="span"
                    text={text}
                    variant="headline4"
                    color={hasBackground ? 'onBase' : 'title'}
                />
            </StyledButton>
        )
    }

    return (
        <StyledButton
            bgColor={bgColor}
            hasBackground={hasBackground}
            {...props}
        >
            <Typography
                as="span"
                text={text}
                variant="headline4"
                color={hasBackground ? 'onBase' : 'title'}
            />
        </StyledButton>
    )
}
