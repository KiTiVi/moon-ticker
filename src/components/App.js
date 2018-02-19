import React, { Component } from 'react'
import '../styles/App.css'

import Background from './Background'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to Grupparbete</h1>
        </header>
        <Background />
      </div>
    )
  }
}

export default App
