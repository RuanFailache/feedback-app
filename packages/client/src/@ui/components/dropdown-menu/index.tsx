import { useRef } from 'react'
import { Typography } from 'src/@presentation/components'
import { StyledDropdownMenu } from './dropdown-menu.styles'
import { FiChevronUp, FiChevronDown, FiCheck } from 'react-icons/fi'
import { useDropdownMenu } from './dropdown-menu.hook'
import { theme } from 'src/@presentation/themes/theme'

interface IDropdownMenu {
    label?: string
    options: string[]
    initialValue: string
    onChange?: (option: string) => void
}

export const DropdownMenu = function ({
    label,
    options,
    onChange,
    initialValue,
}: IDropdownMenu) {
    const wrapperRef = useRef<HTMLDivElement>(null)

    const { value, handleChange, isOpen, toogleDropdown } = useDropdownMenu(
        initialValue,
        wrapperRef,
        onChange
    )

    const Icon = isOpen ? FiChevronUp : FiChevronDown

    return (
        <StyledDropdownMenu.Container ref={wrapperRef}>
            <StyledDropdownMenu.Select onClick={toogleDropdown}>
                <div>
                    {label && (
                        <Typography
                            text={`${label} : `}
                            color="onBase"
                            variant="body2"
                        />
                    )}
                    <Typography
                        text={value}
                        color="onBase"
                        variant="headline4"
                    />
                </div>
                <Icon color={theme.palette.onBase} />
            </StyledDropdownMenu.Select>

            {isOpen && (
                <StyledDropdownMenu.Dropdown>
                    {options.map((option, index) => (
                        <StyledDropdownMenu.DropdownItem
                            key={index}
                            onClick={() => handleChange(option)}
                        >
                            <Typography text={option} />
                            {option === value && (
                                <FiCheck color={theme.palette.primary} />
                            )}
                        </StyledDropdownMenu.DropdownItem>
                    ))}
                </StyledDropdownMenu.Dropdown>
            )}
        </StyledDropdownMenu.Container>
    )
}
