import styled, { keyframes } from 'styled-components'
import { Animation } from '@ui/themes/animation'

export class StyledDropdownMenu {
    static Container = styled.div`
        display: block;
        position: relative;
        width: fit-content;
        z-index: 1;
    `

    static Select = styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
        border-radius: ${(props) => props.theme.borderRadius};
        cursor: pointer;

        p {
            display: inline;
        }
    `

    static Dropdown = styled.ul`
        position: absolute;
        top: 80px;
        left: 0;
        min-width: 240px;
        border-radius: ${(props) => props.theme.borderRadius};
        overflow: hidden;
        box-shadow: 0 10px 40px -7px rgba(55, 63, 104, 0.35);
        box-sizing: border-box;
        animation: ${Animation.upDown} 0.3s forwards;

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
        background-color: ${(props) => props.theme.palette.surface};

        &:hover > p {
            color: ${(p) => p.theme.palette.primary};
        }
    `
}
