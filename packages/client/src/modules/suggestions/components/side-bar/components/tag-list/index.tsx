import { useState } from 'react'
import { Typography } from '@/app-commons/components'
import { SuggestionsSideBarStyles } from '../../side-bar.styles'
import { SuggestionsSideBarTagListStyles } from './tag-list.styles'
import { useSuggestionContext } from '@/app-modules/suggestions/suggestions.context'

export const SuggestionsSideBarTagList = function () {
    const { categories, category, filterByCategory } = useSuggestionContext()

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
