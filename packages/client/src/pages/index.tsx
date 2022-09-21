import Head from 'next/head'
import { SuggestionsPage } from '@/app-modules/suggestions'

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
