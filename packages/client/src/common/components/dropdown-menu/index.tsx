import { RefObject, useEffect, useRef, useState } from 'react'
import { Typography } from '../typography'
import { StyledDropdownMenu } from './dropdown-menu.styles'
import { FiChevronUp, FiChevronDown, FiCheck } from 'react-icons/fi'
import { useDropdownMenu } from './dropdown-menu.hook'
import { theme } from '../../themes'

interface IDropdownMenu {
    label?: string
    options: string[]
    onChange?: (option: string) => void
}

export const DropdownMenu = function ({
    label,
    options,
    onChange,
}: IDropdownMenu) {
    const wrapperRef = useRef<HTMLDivElement>(null)

    const { value, handleChange, isOpen, openDropdown } = useDropdownMenu(
        options,
        wrapperRef,
        onChange
    )

    const Icon = isOpen ? FiChevronUp : FiChevronDown

    return (
        <StyledDropdownMenu.Container ref={wrapperRef}>
            <StyledDropdownMenu.Select onClick={openDropdown}>
                <div>
                    {label && (
                        <Typography
                            text={`${label} : `}
                            color="background"
                            variant="body3"
                        />
                    )}
                    <Typography
                        text={value}
                        color="background"
                        variant="headline4"
                    />
                </div>
                <Icon color={theme.palette.background} />
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
