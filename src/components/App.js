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
import Header from './Header'
import CoinRocketList from './CoinRocketList'

const SCREEN_ORIENTATION = window.screen.orientation

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
    myCoins: [],
    showAddCoin: false,
    isMobile: null
  }
  async componentDidMount() {
    this.screenOrientation = SCREEN_ORIENTATION

    await this.setIsMobile()
    window.addEventListener('resize', () => {
      this.setIsMobile()
      this.setMoonPosition(this.props.location.pathname, this.state.isMobile)
    })
    this.setMoonPosition(this.props.location.pathname, this.state.isMobile)
    this.props.history.listen((location, action) => {
      this.setMoonPosition(location.pathname, this.state.isMobile)
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

  setIsMobile = async () => {
    if (window.innerWidth <= mobile_max && !this.state.isMobile) {
      await this.setState({ isMobile: true })
      this.screenOrientation.lock('landscape')
      console.log(this.screenOrientation)
    }

    if (window.innerWidth >= desktop_min && this.state.isMobile) {
      await this.setState({ isMobile: false })
      this.screenOrientation.unlock()
    }
  }

  // MINNES KOMMENTAR
  setMoonPosition = (path, isMobile) => {
    switch (path) {
      case '/welcome':
        this.setState({
          moonPosition: {
            top: 180,
            left: 'calc(100vw - 400px)'
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
            top: isMobile ? 160 : 'calc(50vh - 310px)',
            left: isMobile ? 1800 : 'calc(100vw - 210px)'
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
      console.log(this.state.myCoins)
    } else {
      this.setState(prevState => ({
        myCoins: [...prevState.myCoins, { ...coin, moonTarget }]
      }))
      console.log(this.state.myCoins)
    }
  }
  toggleAddCoin = () => {
    this.setState(prevState => ({ showAddCoin: !prevState.showAddCoin }))
  }
  render() {
    return (
      <div className="App">
        <Header />
        {this.state.showAddCoin && (
          <AddCoin
            toggleAddCoin={this.toggleAddCoin}
            coinData={this.state.coinData.data}
            onAddCoin={this.onAddCoin}
            myCoins={this.state.myCoins}
          />
        )}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <CoinRocketList
                isShowingAddCoin={this.state.showAddCoin}
                toggleAddCoin={this.toggleAddCoin}
                myCoins={this.state.myCoins}
              />
            )}
          />
          <Route path="/welcome" render={() => <Welcome />} />
          <Route
            path="/addcoin"
            render={() => (
              <AddCoin
                toggleAddCoin={() => this.props.history.push('/')}
                coinData={this.state.coinData.data}
                onAddCoin={this.onAddCoin}
                myCoins={this.state.myCoins}
              />
            )}
          />
        </Switch>
        <Responsive minWidth={desktop_min}>
          <Moon animated size={550} position={this.state.moonPosition} />
        </Responsive>
        <Responsive maxWidth={mobile_max}>
          <Moon animated size={250} position={this.state.moonPosition} />
        </Responsive>
        <Background />
      </div>
    )
  }
}

export default App
