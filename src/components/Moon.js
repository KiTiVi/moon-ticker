import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Moon extends Component {
  state = { size: null, secretCount: 0, easterEgg: false }

  componentDidMount() {
    if (this.props.animated) {
      this.setState({ size: 1 })
      if (this.state.size <= this.props.size) {
        const moonFlight = setInterval(() => {
          if (this.state.size >= this.props.size)
            return clearInterval(moonFlight)
          this.setState({
            size:
              this.state.size < this.props.size / 1.35
                ? this.state.size + 1.25
                : this.state.size + 1
          })
        }, 1)
      }
    } else {
      this.setState({ size: this.props.size })
    }
  }

  easterEggClick = () => {
    this.setState({ secretCount: this.state.secretCount + 1 })

    if (this.state.secretCount === 2) {
      this.setState({ easterEgg: true })
      setTimeout(() => {
        this.setState({ secretCount: 0, easterEgg: false })
      }, 30000)
    }
  }

  render() {
    const { animated, size, position } = this.props
    const moonStyle = {
      height: this.state.size,
      width: this.state.size,
      top: position.top ? position.top : null,
      left: position.left ? position.left : null,
      right: position.right ? position.right : null,
      bottom: position.bottom ? position.bottom : null
    }
    return (
      <div
        className={
          this.state.easterEgg
            ? 'moon-component is-easter-egg'
            : animated ? 'moon-component is-animated' : 'moon-component'
        }
        style={moonStyle}
      >
        <div className="moon-body" onClick={this.easterEggClick}>
          <div
            className="crater large"
            style={{
              top: `${this.state.size / 3.3}px`,
              left: `${this.state.size / 7}px`
            }}
          />
          <div
            id="crater-medium-1"
            className="crater medium"
            style={{
              top: `${this.state.size / 4.5}px`,
              left: `${this.state.size / 1.5}px`
            }}
          />
          <div
            id="crater-medium-2"
            className="crater medium"
            style={{
              top: `${this.state.size / 1.35}px`,
              left: `${this.state.size / 2.2}px`
            }}
          />
          <div
            id="crater-small-1"
            className="crater small"
            style={{
              top: `${this.state.size / 1.4}px`,
              left: `${this.state.size / 4.5}px`
            }}
          />
          <div
            id="crater-small-2"
            className="crater small"
            style={{
              top: `${this.state.size / 2.3}px`,
              left: `${this.state.size / 2.1}px`
            }}
          />
          <div
            id="crater-small-3"
            className="crater small"
            style={{
              top: `${this.state.size / 8}px`,
              left: `${this.state.size / 2.6}px`
            }}
          />
          <div
            id="crater-small-4"
            className="crater small"
            style={{
              top: `${this.state.size / 1.9}px`,
              left: `${this.state.size / 1.15}px`
            }}
          />
        </div>
      </div>
    )
  }
}

Moon.propTypes = {
  animated: PropTypes.bool,
  size: PropTypes.number.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number
  }).isRequired
}

export default Moon
