import { Typography } from '@ui/components'
import { Suggestion } from '@resources/models/suggestion'
import { theme } from '@ui/themes/theme'
import { AiFillMessage } from 'react-icons/ai'
import { FiChevronUp } from 'react-icons/fi'
import { SuggestionCardStyles } from './card.styles'

interface Props {
    suggestion: Suggestion
}

export const SuggestionCard = function ({ suggestion }: Props) {
    return (
        <SuggestionCardStyles.Container>
            <SuggestionCardStyles.Content>
                <SuggestionCardStyles.UpvoteButton>
                    <FiChevronUp
                        size={12}
                        color={theme.palette.secondary}
                    />
                    <Typography
                        text={suggestion.upvotes.toString()}
                        variant="body3"
                        color="title"
                    />
                </SuggestionCardStyles.UpvoteButton>
                <SuggestionCardStyles.TextBox>
                    <Typography
                        as="strong"
                        text={suggestion.title}
                        variant="headline3"
                        color="title"
                    />
                    <Typography text={suggestion.description} />
                    <SuggestionCardStyles.Tag>
                        <Typography
                            text={suggestion.category}
                            variant="body3"
                            color="secondary"
                        />
                    </SuggestionCardStyles.Tag>
                </SuggestionCardStyles.TextBox>
            </SuggestionCardStyles.Content>
            <SuggestionCardStyles.CommentBox>
                <AiFillMessage
                    size={18}
                    color="#CDD2EE"
                />
                <p>{suggestion.comments?.length ?? 0}</p>
            </SuggestionCardStyles.CommentBox>
        </SuggestionCardStyles.Container>
    )
}
