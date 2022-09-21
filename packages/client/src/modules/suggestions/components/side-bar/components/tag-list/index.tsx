import { useState } from 'react'
import { Typography } from '@/app-commons/components'
import { SuggestionsSideBarStyles } from '../../side-bar.styles'
import { SuggestionsSideBarTagListStyles } from './tag-list.styles'

const tags = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']

const useFilterSuggestionByTag = function (tags: string[]) {
    const [selectedTag, setSelectedTag] = useState(tags[0])

    const changeTag = (tag: string) => setSelectedTag(tag)

    return { selectedTag, changeTag }
}

export const SuggestionsSideBarTagList = function () {
    const { selectedTag, changeTag } = useFilterSuggestionByTag(tags)

    return (
        <SuggestionsSideBarStyles.Box>
            <SuggestionsSideBarTagListStyles.List>
                {tags.map((tag) => (
                    <SuggestionsSideBarTagListStyles.Tag
                        key={tag}
                        selected={tag === selectedTag}
                        onClick={() => changeTag(tag)}
                    >
                        <Typography
                            as="span"
                            text={tag}
                            variant="body3"
                        />
                    </SuggestionsSideBarTagListStyles.Tag>
                ))}
            </SuggestionsSideBarTagListStyles.List>
        </SuggestionsSideBarStyles.Box>
    )
}
