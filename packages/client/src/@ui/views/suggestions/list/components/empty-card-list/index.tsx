import Image from 'next/image'
import { SuggestionsEmptyCardListStyles } from './empty-card-list.styles'
import searchImg from '@/app-assets/images/empty-list.svg'
import { Button, Typography } from 'src/@presentation/components'
import { MdAdd } from 'react-icons/md'

export const SuggestionsEmptyCardList = function () {
    return (
        <SuggestionsEmptyCardListStyles.Container>
            <SuggestionsEmptyCardListStyles.Content>
                <Image src={searchImg} />
                <SuggestionsEmptyCardListStyles.TextBox>
                    <Typography
                        text="There is no feedback yet."
                        variant="headline1"
                        color="title"
                        centered
                    />
                    <Typography
                        text="Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app."
                        centered
                    />
                </SuggestionsEmptyCardListStyles.TextBox>
                <Button
                    bgColor="primary"
                    icon={MdAdd}
                    text="Add Feedback"
                />
            </SuggestionsEmptyCardListStyles.Content>
        </SuggestionsEmptyCardListStyles.Container>
    )
}
