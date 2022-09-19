import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../common/themes'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
