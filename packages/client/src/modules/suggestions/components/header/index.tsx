import { Typography, Button, DropdownMenu } from '@/app-commons/components'
import { MdAdd } from 'react-icons/md'
import Image from 'next/image'
import BulbIcon from '@/app-assets/icons/bulb.svg'
import { SuggestionsHeaderStyles } from './header.styles'
import { useSuggestionContext } from '../../suggestions.context'

export const SuggestionsHeader = function () {
    const { amount } = useSuggestionContext()

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
                    options={[
                        'Most Upvotes',
                        'Least Upvotes',
                        'Most Comments',
                        'Least Comments',
                    ]}
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
