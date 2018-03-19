import React from 'react'
import styled, { keyframes } from 'styled-components'

export default () => [<Stars key="1" />, <Twinkling key="2" />]

const MoveTwinkBack = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
`
const Stars = Background.extend`
  background: #000 url(./assets/stars.png) repeat top center;
  z-index: -1;
`
const Twinkling = Background.extend`
  background: transparent url(./assets/twinkling.png) repeat top center;
  animation: ${`${MoveTwinkBack} 400s linear infinite`};
  z-index: -1;
`
