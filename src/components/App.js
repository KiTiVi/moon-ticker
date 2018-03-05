import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import axios from 'axios'
import Responsive from 'react-responsive'

import '../styles/App.css'
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
    },
    coinData: {
      timestamp: null,
      data: []
    },
    myCoins: []
  }
  async componentDidMount() {
    window.addEventListener('resize', () => console.log(window.innerWidth))
    this.setMoonPosition(this.props.location.pathname)
    this.props.history.listen((location, action) => {
      this.setMoonPosition(location.pathname)
    })
    this.checkLocalStorage()
  }
  checkLocalStorage = async () => {
    var persistedCoinData = JSON.parse(localStorage.getItem('moon-coin-data'))
    if (persistedCoinData) {
      this.refreshCoinData(persistedCoinData)
    } else {
      const { data } = await this.fetchCoinmarketCap()
      console.log('in checkLocalStorage:', data)
      this.persistCoinData(data)
    }
  }
  refreshCoinData = persistedCoinData => {
    this.setState({ coinData: persistedCoinData }, async () => {
      if (new Date().getTime() >= this.state.coinData.timestamp + 60000 * 5) {
        console.log('new date greater than old')
        let { data } = await this.fetchCoinmarketCap()
        this.persistCoinData(data)
        console.log('Data: ' + data)
      }
    })
  }
  fetchCoinmarketCap = async () => {
    try {
      console.log('fetching coin data')
      return await axios.get('https://api.coinmarketcap.com/v1/ticker/')
    } catch (error) {
      throw new Error(error)
    }
  }
  persistCoinData = coinData => {
    const coinDataWithTime = {
      timestamp: new Date().getTime(),
      data: [...coinData]
    }
    console.log(coinDataWithTime)
    this.setState({ coinData: coinDataWithTime })
    localStorage.setItem('moon-coin-data', JSON.stringify(coinDataWithTime))
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
            top: '35vh',
            left: '10vw'
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
  onAddCoin = (coin, moonTarget) => {
    console.log('TACK FÖR COINET', coin, moonTarget)
    let newMyCoins = this.state.myCoins.filter(
      coinItem => coinItem.id !== coin.id
    )
    if (
      this.state.myCoins.filter(coinItem => coinItem.id === coin.id).length > 0
    ) {
      newMyCoins.push({ ...coin, moonTarget })
      this.setState(prevState => ({
        myCoins: newMyCoins
      }))
    } else {
      this.setState(prevState => ({
        myCoins: [...prevState.myCoins, { ...coin, moonTarget }]
      }))
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
          <Route
            path="/addcoin"
            render={() => (
              <AddCoin
                coinData={this.state.coinData.data}
                onAddCoin={this.onAddCoin}
              />
            )}
          />
        </Switch>
        <Moon animated size={550} position={this.state.moonPosition} />
        <Background />
      </div>
    )
  }
}

export default App
