import { IconType } from 'react-icons'
import { StyledButton } from './button.styles'
import { colors } from '../../themes/colors'
import { ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    icon?: IconType
    bgColor?: keyof typeof colors['base']
}

export const Button = function ({ text, icon, bgColor, ...props }: IButton) {
    const hasBackground = Boolean(bgColor)
    const background = colors.base[bgColor ? bgColor : 'primary']

    return (
        <StyledButton
            bgColor={background}
            hasBackground={hasBackground}
            {...props}
        >
            {icon &&
                icon({
                    size: 12,
                    fill: hasBackground
                        ? colors.uiElements.background
                        : colors.base.primary,
                })}
            <span>{text}</span>
        </StyledButton>
    )
}
