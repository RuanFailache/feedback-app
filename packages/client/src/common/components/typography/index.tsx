import { FontType, PaletteTheme } from '../../../styled'
import { StyledTypography } from './typography.styles'

interface ITypography {
    as?: keyof JSX.IntrinsicElements
    text: string
    variant?: FontType
    color?: PaletteTheme
}

export const Typography = function ({ as, text, variant, color }: ITypography) {
    return (
        <StyledTypography
            as={as ?? 'p'}
            color={color}
            variant={variant ?? 'body1'}
        >
            {text}
        </StyledTypography>
    )
}
