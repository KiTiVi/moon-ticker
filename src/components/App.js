import React, { Component } from 'react'
import '../styles/App.css'
import { Route, Switch, NavLink } from 'react-router-dom'
import Responsive from 'react-responsive'

import { mobile_max, desktop_min } from '../helpers/mediaQueries'

import Welcome from './Welcome'
import AddCoin from './AddCoin'
import Background from './Background'
import Moon from './Moon'

class App extends Component {
  state = {
    moonPosition: {
      top: '',
      left: ''
    }
  }
  componentDidMount() {
    window.addEventListener('resize', () => console.log(window.innerWidth))
    this.setMoonPosition(this.props.location.pathname)
    this.props.history.listen((location, action) => {
      this.setMoonPosition(location.pathname)
    })
  }
  setMoonPosition = path => {
    switch (path) {
      case '/welcome':
        this.setState({
          moonPosition: {
            top: 80,
            left: 'calc(100vw - 800px)'
          }
        })
        break
      case '/addcoin':
        this.setState({
          moonPosition: {
            top: 'calc(50vh)',
            left: 100
          }
        })
        break
      default:
        this.setState({
          moonPosition: {
            top: 'calc(50vh - 310px)',
            left: 'calc(100vw - 210px)'
          }
        })
        break
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to Grupparbete</h1>
          <NavLink to="/">home</NavLink>
          <NavLink to="/welcome">Welcome</NavLink>
          <NavLink to="/addcoin">Add coin</NavLink>
        </header>
        <Switch>
          <Route path="/welcome" render={() => <Welcome />} />
          <Route path="/addcoin" render={() => <AddCoin />} />
        </Switch>
        <Moon animated size={550} position={this.state.moonPosition} />
        <Background />
      </div>
    )
  }
}

export default App
