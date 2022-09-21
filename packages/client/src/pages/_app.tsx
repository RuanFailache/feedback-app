import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/app-commons/themes/theme'
import { ResetGlobalCss } from '@/app-commons/themes/reset'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <ResetGlobalCss />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
