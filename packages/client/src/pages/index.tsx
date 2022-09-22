import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import { Suggestion } from '@/app-commons/models/suggestion'
import {
    SuggestionProvider,
    useSuggestionContext,
} from '@/app-modules/suggestions/suggestions.context'
import { SuggestionsPageLayout } from '@/app-modules/suggestions/suggestions.layout'
import { SuggestionsFilledCardList } from '@/app-modules/suggestions/components/filled-card-list'
import { SuggestionsEmptyCardList } from '@/app-modules/suggestions/components/empty-card-list'

interface PageProps {
    suggestions: Suggestion[]
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    const data = require('@/app-commons/data.json')
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
            <SuggestionProvider suggestions={suggestions}>
                <SuggestionsPageLayout>
                    <PageComponent />
                </SuggestionsPageLayout>
            </SuggestionProvider>
        </>
    )
}

const PageComponent = function () {
    const { hasSuggestions } = useSuggestionContext()

    if (hasSuggestions) {
        return <SuggestionsFilledCardList />
    }

    return <SuggestionsEmptyCardList />
}

export default Home
