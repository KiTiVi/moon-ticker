import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import MoonFlag from './MoonFlag'

import { desktop_min, mobile_max } from '../helpers/mediaQueries'
import { Wiggle } from './animations/Wiggle'
import coinIconPath from '../helpers/coinIconPath'

const MoonFlagsList = ({ flags, position, width, isMobile }) => (
  <Holder
    top={position.top ? position.top : null}
    left={position.left ? position.left : null}
    right={position.right ? position.right : null}
    bottom={position.bottom ? position.bottom : null}
    width={width}
  >
    <RelativeHolder>
      {flags.map((flag, index) => {
        if (flag.isMoonTarget) {
          return (
            <MoonFlagHolder key={index} index={index} isMobile={isMobile}>
              <MoonFlag
                animationTime={2 + index}
                iconSrc={coinIconPath(flag)}
              />
            </MoonFlagHolder>
          )
        }
      })}
    </RelativeHolder>
  </Holder>
)

MoonFlagsList.propTypes = {
  flags: PropTypes.array
}

export default MoonFlagsList

const Holder = styled.div.attrs({
  style: ({ width, top, left, right, bottom }) => ({
    width,
    top,
    left,
    right,
    bottom
  })
})`
  position: absolute;
  z-index: 3;
  animation: ${({ animated, easterEgg }) =>
    `${Wiggle} 4s infinite ease-in-out`};
`

const RelativeHolder = styled.div`
  position: relative;
`

const getFlagHolderStyle = (index, isMobile) => {
  if (isMobile) {
    switch (index) {
      case 0:
        return { top: -20, left: 50 }
      case 1:
        return { top: -20, right: 50 }
      case 2:
        return { top: 120, left: 50 }
      case 3:
        return { top: 120, right: 50 }
      case 4:
        return { top: 40, right: 130 }
    }
  } else {
    switch (index) {
      case 0:
        return { top: 0, right: 100 }
      case 1:
        return { top: 100, right: 150 }
      case 2:
        return { top: 200, right: 170 }
      case 3:
        return { top: 300, right: 150 }
      case 4:
        return { top: 370, right: 100 }
    }
  }
}

const MoonFlagHolder = styled.div.attrs({
  style: ({ index, isMobile }) => getFlagHolderStyle(index, isMobile)
})`
  position: absolute;
  transition: width 2s;
`
