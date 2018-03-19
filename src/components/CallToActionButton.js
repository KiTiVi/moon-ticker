import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

import { desktop_min, mobile_max } from '../helpers/mediaQueries'

const CallToActionButton = ({ title, isHidden, isAbsolute, callBack }) => (
  <Button isHidden={isHidden} isAbsolute={isAbsolute} onClick={callBack}>
    {title}
  </Button>
)

CallToActionButton.propTypes = {
  title: PropTypes.string.isRequired,
  isHidden: PropTypes.bool,
  isAbsolute: PropTypes.bool,
  callBack: PropTypes.func.isRequired
}

export default CallToActionButton

const buttonAnimation = keyframes`
  0% {
    clip-path: polygon(11% 3%, 94% 0, 94% 100%, 9% 97%);
  }
  50% {
    clip-path: polygon(2% 2%, 100% 5%, 100% 96%, 0 100%);
  }
  100% {
    clip-path: polygon(11% 3%, 94% 0, 94% 100%, 9% 97%);
  }
`

const Button = styled.button`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
  animation: ${buttonAnimation} 10s infinite linear;
  background: #ffb52c;
  color: #3e3e3e;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0 4px 12px -4px rgba(0, 0, 0, 0.5);
  position: ${({ isAbsolute }) => (isAbsolute ? 'absolute' : null)};

  z-index: 2;
  @media (min-width: ${desktop_min}px) {
    bottom: 30px;
    right: 30px;
    width: 200px;
    height: 80px;
  }
  @media (max-width: ${mobile_max}px) {
    bottom: 10px;
    right: 1px;
    background: #ffb52cf0;
    width: 180px;
    height: 70px;
  }
`
