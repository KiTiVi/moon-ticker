import { keyframes } from 'styled-components'

const Show = keyframes`
  0%   {  transform: translateY(-100%);
    opacity: 0;} 
  80%   {  transform: translateY(-100%);
    opacity: 0; }
  100% {  transform: translateY(0);
    opacity: 1; }
`

export { Show }
