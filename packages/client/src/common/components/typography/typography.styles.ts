import styled from 'styled-components'
import { FontType, PaletteTheme } from '../../../styled'

interface IStyledTypography {
    variant: FontType
    color?: PaletteTheme
}

export const StyledTypography = styled.p<IStyledTypography>`
    font-size: ${(p) => p.theme.text[p.variant].size};
    line-height: ${(p) => p.theme.text[p.variant].height};
    font-weight: ${(p) => p.theme.text[p.variant].weight};
    letter-spacing: ${(p) => p.theme.text[p.variant].spacing};
    color: ${(p) => p.theme.palette[p.color ?? 'body']};
`
