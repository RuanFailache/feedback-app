import { FontType, PaletteTheme } from '../../../styled'
import { StyledTypography } from './typography.styles'

interface ITypography {
    as?: keyof JSX.IntrinsicElements
    text: string
    variant?: FontType
    color?: PaletteTheme
    underlined?: boolean
}

export const Typography = function ({
    as,
    text,
    variant,
    color,
    underlined,
}: ITypography) {
    return (
        <StyledTypography
            as={as ?? 'p'}
            color={color}
            variant={variant ?? 'body1'}
            underlined={underlined}
        >
            {text}
        </StyledTypography>
    )
}
