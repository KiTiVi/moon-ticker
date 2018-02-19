import React, { Component } from 'react'
import '../styles/App.css'

import Background from './Background'
import Moon from './Moon'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to Grupparbete</h1>
        </header>
        <Moon
          animated
          size={350}
          position={{
            top: 100,
            left: 100
          }}
        />
        <Background />
      </div>
    )
  }
}

export default App
