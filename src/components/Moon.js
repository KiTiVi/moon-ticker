import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Moon extends Component {
  render() {
    const { animated, size, position } = this.props
    const moonStyle = {
      height: size,
      width: size,
      top: position.top ? position.top : null,
      left: position.left ? position.left : null,
      right: position.right ? position.right : null,
      bottom: position.bottom ? position.bottom : null
    }
    return (
      <div
        className={animated ? 'moon-component is-animated' : 'moon-component'}
        style={moonStyle}
      >
        <div className="moon-body">
          <div
            className="crater large"
            style={{
              top: `${size / 3.3}px`,
              left: `${size / 7}px`
            }}
          />
          <div
            id="crater-medium-1"
            className="crater medium"
            style={{
              top: `${size / 4.5}px`,
              left: `${size / 1.5}px`
            }}
          />
          <div
            id="crater-medium-2"
            className="crater medium"
            style={{
              top: `${size / 1.35}px`,
              left: `${size / 2.2}px`
            }}
          />
          <div
            id="crater-small-1"
            className="crater small"
            style={{
              top: `${size / 1.4}px`,
              left: `${size / 4.5}px`
            }}
          />
          <div
            id="crater-small-2"
            className="crater small"
            style={{
              top: `${size / 2.3}px`,
              left: `${size / 2.1}px`
            }}
          />
          <div
            id="crater-small-3"
            className="crater small"
            style={{
              top: `${size / 8}px`,
              left: `${size / 2.6}px`
            }}
          />
          <div
            id="crater-small-4"
            className="crater small"
            style={{
              top: `${size / 1.9}px`,
              left: `${size / 1.15}px`
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
