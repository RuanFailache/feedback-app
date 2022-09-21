import Head from 'next/head'
import { SuggestionsPage } from '../modules/suggestions'

export default function Home() {
    return (
        <>
            <Head>
                <title>Suggestions</title>
            </Head>
            <SuggestionsPage />
        </>
    )
}
