import 'styled-components'

interface IFont {
    size: number
    height: number
    weight: 300 | 400 | 500 | 600 | 700
    spacing: number
}

type FontType =
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'headline4'
    | 'body1'
    | 'body2'
    | 'body3'

type PaletteTheme =
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

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string
        palette: Record<PaletteTheme, string>
        text: Record<FontType, IFont>
    }
}
