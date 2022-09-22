import { useState } from 'react'
import { Typography } from '@/app-commons/components'
import { SuggestionsSideBarStyles } from '../../side-bar.styles'
import { SuggestionsSideBarTagListStyles } from './tag-list.styles'
import { useSuggestionContext } from '@/app-modules/suggestions/suggestions.context'

export const SuggestionsSideBarTagList = function () {
    const { categories, selectedCategory, filterByCategory } =
        useSuggestionContext()

    return (
        <SuggestionsSideBarStyles.Box>
            <SuggestionsSideBarTagListStyles.List>
                {categories.map((category) => (
                    <SuggestionsSideBarTagListStyles.Tag
                        key={category}
                        selected={category === selectedCategory}
                        onClick={() => filterByCategory(category)}
                    >
                        <Typography
                            as="span"
                            text={category}
                            variant="body3"
                        />
                    </SuggestionsSideBarTagListStyles.Tag>
                ))}
            </SuggestionsSideBarTagListStyles.List>
        </SuggestionsSideBarStyles.Box>
    )
}
