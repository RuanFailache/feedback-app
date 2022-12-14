import { MdAdd } from 'react-icons/md'
import Image from 'next/image'

import BulbIcon from '@/app-assets/icons/bulb.svg'

import { SuggestionsHeaderStyles } from './header.styles'

import { useSuggestionsListContext } from '../../list.context'
import { suggestionsSortLabels } from '../../list.constants'

import { Typography, Button, DropdownMenu } from '@ui/components'

export const SuggestionsHeader = function () {
    const { amount, sortTypeChanged } = useSuggestionsListContext()

    return (
        <SuggestionsHeaderStyles.Container>
            <SuggestionsHeaderStyles.Content>
                <SuggestionsHeaderStyles.Info>
                    <Image
                        src={BulbIcon}
                        alt="bulb icon"
                    />
                    <Typography
                        text={`${amount} Suggestions`}
                        variant="headline3"
                        color="onBase"
                    />
                </SuggestionsHeaderStyles.Info>
                <DropdownMenu
                    label="Sort by"
                    initialValue={suggestionsSortLabels[0]}
                    options={suggestionsSortLabels}
                    onChange={sortTypeChanged}
                />
            </SuggestionsHeaderStyles.Content>
            <Button
                icon={MdAdd}
                text="Add Feedback"
                bgColor="primary"
            />
        </SuggestionsHeaderStyles.Container>
    )
}
