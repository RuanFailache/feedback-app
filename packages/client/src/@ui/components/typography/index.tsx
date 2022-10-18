import { FontType, PaletteTheme } from 'styled-components'

import { StyledTypography } from './typography.styles'

interface ITypography {
    as?: keyof JSX.IntrinsicElements
    text: string
    variant?: FontType
    color?: PaletteTheme
    underlined?: boolean
    centered?: boolean
}

export const Typography = function ({
    as,
    text,
    variant,
    color,
    underlined,
    centered,
}: ITypography) {
    return (
        <StyledTypography
            as={as ?? 'p'}
            color={color}
            variant={variant ?? 'body1'}
            underlined={underlined}
            centered={centered}
        >
            {text}
        </StyledTypography>
    )
}
