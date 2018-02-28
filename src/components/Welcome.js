import React, { Component } from 'react'
import '../styles/App.css'

import WelcomeWindow from './WelcomeWindow'

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <WelcomeWindow />
      </div>
    )
  }
}

export default Welcome
