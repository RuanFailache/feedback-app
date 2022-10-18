import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import { Suggestion } from '@resources/models/suggestion'
import { SuggestionsListProvider } from '@ui/views/suggestions/list/list.context'
import { SuggestionsListView } from '@ui/views/suggestions/list/list.view'

interface PageProps {
    suggestions: Suggestion[]
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    const data = require('@resources/services/data.json')
    const suggestions: Suggestion[] = data.productRequests
    return {
        props: {
            suggestions,
        },
    }
}

const Home: NextPage<PageProps> = function ({ suggestions }) {
    return (
        <>
            <Head>
                <title>Suggestions</title>
            </Head>
            <SuggestionsListProvider suggestions={suggestions}>
                <SuggestionsListView />
            </SuggestionsListProvider>
        </>
    )
}

export default Home
