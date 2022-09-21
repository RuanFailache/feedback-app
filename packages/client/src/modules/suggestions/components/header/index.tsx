import { Typography, Button, DropdownMenu } from '@/app-commons/components'
import { MdAdd } from 'react-icons/md'
import Image from 'next/image'
import BulbIcon from '@/app-public/icons/bulb.svg'
import { SuggestionsHeaderStyles } from './header.styles'

export const SuggestionsHeader = function () {
    return (
        <SuggestionsHeaderStyles.Container>
            <SuggestionsHeaderStyles.Content>
                <SuggestionsHeaderStyles.Info>
                    <Image
                        src={BulbIcon}
                        alt="bulb icon"
                    />
                    <Typography
                        text="6 Suggestions"
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
