import { useState } from 'react'
import { Typography } from '@ui/components'
import { SuggestionsSideBarStyles } from '../../side-bar.styles'
import { SuggestionsSideBarTagListStyles } from './tag-list.styles'
import { useSuggestionsListContext } from '@ui/views/suggestions/list/list.context'

export const SuggestionsSideBarTagList = function () {
    const { categories, category, filterByCategory } =
        useSuggestionsListContext()

    return (
        <SuggestionsSideBarStyles.Box>
            <SuggestionsSideBarTagListStyles.List>
                {categories.map((curr) => (
                    <SuggestionsSideBarTagListStyles.Tag
                        key={curr}
                        selected={curr === category}
                        onClick={() => filterByCategory(curr)}
                    >
                        <Typography
                            as="span"
                            text={curr}
                            variant="body3"
                        />
                    </SuggestionsSideBarTagListStyles.Tag>
                ))}
            </SuggestionsSideBarTagListStyles.List>
        </SuggestionsSideBarStyles.Box>
    )
}
