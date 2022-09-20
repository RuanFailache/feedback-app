import { RefObject, useEffect, useState } from 'react'

export const useDropdownMenu = function (
    options: string[],
    ref: RefObject<HTMLDivElement>,
    onChange?: (option: string) => void
) {
    const [value, setValue] = useState(options[0])
    const [isOpen, setIsOpen] = useState(false)

    const toogleDropdown = () => setIsOpen((prev) => !prev)

    const closeDropdown = () => setIsOpen(false)

    const handleChange = function (option: string) {
        if (onChange) onChange(option)
        setValue(option)
        closeDropdown()
    }

    useEffect(() => {
        const handleClickOutside = (ev: MouseEvent) => {
            const curr = ref.current
            if (!curr) return
            const node = ev.target as Node | null
            if (curr.contains(node)) return
            setIsOpen(false)
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])

    return { value, handleChange, isOpen, toogleDropdown, closeDropdown }
}
