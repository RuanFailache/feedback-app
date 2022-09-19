import { RefObject, useRef, useState } from 'react'
import { Typography } from '../typography'
import { StyledDropdownMenu } from './dropdown-menu.styles'
import { FiChevronUp, FiChevronDown, FiCheck } from 'react-icons/fi'
import { theme } from '../../themes'

interface IDropdownMenu {
    label?: string
    options: string[]
    onChange?: (option: string) => void
}

const useDropdownMenu = function (
    options: string[],
    ref: RefObject<HTMLDivElement>,
    onChange?: (option: string) => void
) {
    const [value, setValue] = useState(options[0])
    const [isOpen, setIsOpen] = useState(false)

    const openDropdown = () => {
        if (ref.current) {
            ref.current.focus()
        }
        setIsOpen(true)
    }

    const closeDropdown = () => {
        setIsOpen(false)
    }

    const handleChange = function (option: string) {
        if (onChange) onChange(option)
        setValue(option)
        closeDropdown()
    }

    return { value, handleChange, isOpen, openDropdown, closeDropdown }
}

export const DropdownMenu = function ({
    label,
    options,
    onChange,
}: IDropdownMenu) {
    const wrapperRef = useRef<HTMLDivElement>(null)

    const { value, handleChange, isOpen, openDropdown, closeDropdown } =
        useDropdownMenu(options, wrapperRef, onChange)

    return (
        <StyledDropdownMenu.Container
            ref={wrapperRef}
            onBlur={closeDropdown}
        >
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
                {isOpen ? <FiChevronUp /> : <FiChevronDown />}
            </StyledDropdownMenu.Select>

            {isOpen && (
                <StyledDropdownMenu.Dropdown>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleChange(option)}
                        >
                            <Typography
                                text={option}
                                variant="body1"
                                color={option === value ? 'body' : 'secondary'}
                            />
                            {option === value && <FiCheck />}
                        </li>
                    ))}
                </StyledDropdownMenu.Dropdown>
            )}
        </StyledDropdownMenu.Container>
    )
}
