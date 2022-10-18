import styled from 'styled-components'

import { FontType, PaletteTheme } from 'styled-components'

interface IStyledTypography {
    variant: FontType
    color?: PaletteTheme
    underlined?: boolean
    centered?: boolean
}

export const StyledTypography = styled.p<IStyledTypography>`
    font-size: ${(p) => p.theme.text[p.variant].size};
    line-height: ${(p) => p.theme.text[p.variant].height};
    font-weight: ${(p) => p.theme.text[p.variant].weight};
    letter-spacing: ${(p) => p.theme.text[p.variant].spacing};
    color: ${(p) => p.theme.palette[p.color ?? 'body']};
    text-decoration: ${(p) => (p.underlined ? 'underline' : 'none')};
    text-align: ${(p) => (p.centered ? 'center' : 'start')};
`
