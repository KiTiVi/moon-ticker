import React, { Component } from 'react'
import '../styles/App.css'

import Background from './Background'
import Moon from './Moon'
import WelcomeWindow from './WelcomeWindow'

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <header>
          <h1>Welcome to Grupparbete</h1>
        </header>
        <WelcomeWindow />
        <Moon
          animated
          size={550}
          position={{
            top: 100,
            left: `${window.innerWidth - 975}px`
          }}
        />
        <Background />
      </div>
    )
  }
}

export default Welcome
