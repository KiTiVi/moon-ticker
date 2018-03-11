import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import {Wiggle} from './animations/Wiggle'
class Moon extends Component {
  state = { size: null, secretCount: 0, easterEgg: false }

  componentDidMount() {
    if (this.props.animated) {
      this.setState({ size: 0.1 })
      if (this.state.size <= this.props.size) {
        const moonFlight = setInterval(() => {
          if (this.state.size >= this.props.size)
            return clearInterval(moonFlight)
          this.setState({
            size: this.state.size + 5
          })
        }, 1)
      }
    } else {
      this.setState({ size: this.props.size })
    }
  }

  easterEggClick = () => {
    this.setState({ secretCount: this.state.secretCount + 1 })

    if (this.state.secretCount === 9) {
      this.setState({ easterEgg: true })
      setTimeout(() => {
        this.setState({ secretCount: 0, easterEgg: false })
      }, 30000)
    }
  }

  render() {
    const { position } = this.props
    return (
      <MoonWrapper
        animated={this.props.animated}
        easterEgg={this.state.easterEgg}
        height={this.state.size}
        width={this.state.size}
        top={position.top ? position.top : null}
        left={position.left ? position.left : null}
        right={position.right ? position.right : null}
        bottom={position.bottom ? position.bottom : null}
      >
        <MoonBody onClick={this.easterEggClick}>
          <CraterLarge
            position={{
              top: this.state.size / 3.3,
              left: this.state.size / 7
            }}
          />
          <CraterMedium
            position={{
              top: this.state.size / 4.5,
              left: this.state.size / 1.5
            }}
          />
          <CraterMedium
            id="crater-medium-2"
            position={{
              top: this.state.size / 1.35,
              left: this.state.size / 2.2
            }}
          />
          <CraterSmall
            id="crater-small-1"
            position={{
              top: this.state.size / 1.4,
              left: this.state.size / 4.5
            }}
          />
          <CraterSmall
            id="crater-small-2"
            position={{
              top: this.state.size / 2.3,
              left: this.state.size / 2.1
            }}
          />
          <CraterSmall
            id="crater-small-3"
            position={{
              top: this.state.size / 8,
              left: this.state.size / 2.6
            }}
          />
          <CraterSmall
            id="crater-small-4"
            position={{
              top: this.state.size / 1.9,
              left: this.state.size / 1.15
            }}
          />
        </MoonBody>
      </MoonWrapper>
    )
  }
}

Moon.propTypes = {
  animated: PropTypes.bool,
  size: PropTypes.number.isRequired,
  position: PropTypes.object.isRequired
}

export default Moon

// Styles
const MoonWrapper = styled.figure.attrs({
  style: ({ height, width, top, left, right, bottom }) => ({
    height,
    width,
    top,
    left,
    right,
    bottom
  })
})`
  position: absolute;
  border-radius: 50%;
  background: #c7cbd1;
  border: 2px solid #788999;
  box-shadow: inset -50px 0px 0px 0px #a4a3a8;
  transition: 1s all ease;
  margin: 0;
  animation: ${({ animated, easterEgg }) =>
    easterEgg
      ? `${easterEggAnimation} 30s linear`
      : animated ? `${Wiggle} 4s infinite ease-in-out` : null};
`
const MoonBody = styled.div`
  position: relative;
  height: 100%;
`
const Crater = styled.div.attrs({
  style: ({ position }) => ({
    top: position.top,
    left: position.left
  })
})`
  transition: 1s all ease;
  position: absolute;
  background: #747379;
  border-radius: 50%;
`
const CraterLarge = Crater.extend`
  width: 20%;
  height: 20%;
  box-shadow: inset 12px -2px 0px 0px #404040;
`
const CraterMedium = Crater.extend`
  width: 12%;
  height: 12%;
  box-shadow: inset 7px -2px 0px 0px #404040;
`
const CraterSmall = Crater.extend`
  width: 5%;
  height: 5%;
  box-shadow: inset 4px -2px 0px 0px #404040;
`

const easterEggAnimation = keyframes`
0% {
transform: translateY(25px);
transform: scale(1.1);
}
25% {
transform: rotate3d(45, 0, 0, 900deg) rotate(980deg) scale(0.01)
  translateY(-25px);
}
100% {
transform: rotate3d(45, 0, 0, 900deg) rotate(980deg) scale(0.00001)
  translateY(-25px);
}
`
