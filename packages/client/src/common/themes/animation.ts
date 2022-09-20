import { keyframes } from 'styled-components'

export class Animation {
    static upDown = keyframes`
        from {
            transform: translateY(-20px);
        } to {
            transform: translateY(0);
        }
    `
}
