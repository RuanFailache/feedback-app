import styled from 'styled-components'
import { Typography } from '../typography'

export class StyledDropdownMenu {
    static Container = styled.div`
        display: block;
        position: relative;
    `

    static Select = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;

        width: 120px;
        padding: 10px 20px;
        border-radius: ${(props) => props.theme.borderRadius};
        background-color: purple;
        box-sizing: border-box;
    `

    static Dropdown = styled.ul`
        position: absolute;
        top: 60px;
        left: 0;
        width: 200px;
        border-radius: ${(props) => props.theme.borderRadius};
        overflow: hidden;
        box-shadow: 0 10px 40px -7px rgba(55, 63, 104, 0.35);
        box-sizing: border-box;

        li + li {
            border-top: solid 1px #e2e3ea;
        }
    `

    static DropdownItem = styled.li`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 24px;
        cursor: pointer;

        &:hover > p {
            color: ${(p) => p.theme.palette.primary};
        }
    `
}
