import 'styled-components'

interface IFont {
    size: string
    height: string
    weight: 300 | 400 | 500 | 600 | 700
    spacing: string
}

declare module 'styled-components' {
    export type FontType =
        | 'headline1'
        | 'headline2'
        | 'headline3'
        | 'headline4'
        | 'body1'
        | 'body2'
        | 'body3'

    export type PaletteTheme =
        | 'primary'
        | 'secondary'
        | 'tertiary'
        | 'background'
        | 'surface'
        | 'onBase'
        | 'title'
        | 'body'
        | 'alert'
        | 'tangerine'
        | 'maya'

    export type TokenType = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

    export interface DefaultTheme {
        borderRadius: string
        palette: Record<PaletteTheme, string>
        text: Record<FontType, IFont>
        grid: Record<TokenType, string>
    }
}
