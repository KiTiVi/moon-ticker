import { keyframes } from 'styled-components'

const Wiggle = keyframes`
0% {
transform: translateY(15px);
}
50% {
transform: translateY(-15px);
}
100% {
transform: translateY(15px);
}
`

export { Wiggle }
