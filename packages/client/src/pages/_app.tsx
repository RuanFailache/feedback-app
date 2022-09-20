import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../common/themes/theme'
import { ResetGlobalCss } from '../common/themes/reset'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <ResetGlobalCss />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
