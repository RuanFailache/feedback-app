import { ResetGlobalCss } from '@ui/themes/reset'
import { theme } from '@ui/themes/theme'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <ResetGlobalCss />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
