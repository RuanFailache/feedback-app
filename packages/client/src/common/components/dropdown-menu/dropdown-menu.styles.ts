import styled from 'styled-components'

export class StyledDropdownMenu {
    static Container = styled.div``

    static Select = styled.div`
        display: flex;
        align-items: center;
        gap: 10px;

        padding: 20px;
        border-radius: ${(props) => props.theme.borderRadius};
    `

    static Dropdown = styled.div``
}
