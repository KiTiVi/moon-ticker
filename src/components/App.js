import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import axios from 'axios'
import Responsive from 'react-responsive'
import styled from 'styled-components'

import '../styles/App.css'
import { mobile_max, desktop_min } from '../helpers/mediaQueries'

import WelcomeWindow from './WelcomeWindow'
import AddCoin from './AddCoin'
import Background from './Background'
import Moon from './Moon'
import Header from './Header'
import CoinRocketList from './CoinRocketList'
import MoonFlagsList from './MoonFlagsList'

class App extends Component {
  state = {
    moonPosition: {
      top: '',
      left: ''
    },
    flagPosition: {
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
    await this.setIsMobile()
    window.addEventListener('resize', () => {
      this.setIsMobile()
      this.setMoonPosition(this.props.location.pathname, this.state.isMobile)
    })
    this.setMoonPosition(this.props.location.pathname, this.state.isMobile)
    this.props.history.listen((location, action) => {
      this.setMoonPosition(location.pathname, this.state.isMobile)
    })
    await this.checkLocalStorage()
  }

  checkLocalStorage = async () => {
    const myCoins = JSON.parse(localStorage.getItem('my-coin-data'))
    if (myCoins) {
      this.setState({ myCoins: myCoins })
    } else {
      this.props.history.push('/welcome')
    }

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
    this.setState({ coinData: coinDataWithTime }, () => {
      if (this.state.myCoins.length > 0) {
        this.updateCoins()
      }
    })
    localStorage.setItem('moon-coin-data', JSON.stringify(coinDataWithTime))
  }

  setIsMobile = async () => {
    if (window.innerWidth <= mobile_max && !this.state.isMobile) {
      await this.setState({ isMobile: true })
    }
    if (window.innerWidth >= desktop_min && this.state.isMobile) {
      await this.setState({ isMobile: false })
    }
  }

  setMoonPosition = (path, isMobile) => {
    switch (path) {
      case '/welcome':
        this.setState({
          moonPosition: {
            top: 180,
            left: 'calc(100vw - 400px)'
          },
          flagPosition: {
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
          },
          flagPosition: {
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
          },
          flagPosition: {
            top: isMobile ? 160 : 'calc(50vh - 310px)',
            left: isMobile ? 1800 : 'calc(100vw - 250px)'
          }
        })
        break
    }
  }

  saveMyCoins = () => {
    localStorage.setItem('my-coin-data', JSON.stringify(this.state.myCoins))
  }

  updateCoins = () => {
    const myCoins = this.state.myCoins.map(myCoin => {
      const coin = this.state.coinData.data.find(x => x.id === myCoin.id)
      const isMoonTarget = this.isMoonTarget(
        parseFloat(coin.price_usd),
        myCoin.moonTarget
      )
      return { ...coin, moonTarget: myCoin.moonTarget, isMoonTarget }
    })

    this.setState({ myCoins: myCoins }, () => {
      this.saveMyCoins()
    })
  }

  isMoonTarget(price, moonTarget) {
    return price >= moonTarget
  }

  onAddCoin = (coin, moonTarget) => {
    console.log('TACK FÖR COINET', coin, moonTarget)
    let newMyCoins = this.state.myCoins.filter(
      coinItem => coinItem.id !== coin.id
    )
    const isMoonTarget = this.isMoonTarget(
      parseFloat(coin.price_usd),
      moonTarget
    )
    if (
      this.state.myCoins.filter(coinItem => coinItem.id === coin.id).length > 0
    ) {
      newMyCoins.push({ ...coin, moonTarget, isMoonTarget })
      this.setState(
        prevState => ({
          myCoins: newMyCoins
        }),
        () => {
          this.saveMyCoins()
        }
      )
    } else {
      this.setState(
        prevState => ({
          myCoins: [...prevState.myCoins, { ...coin, moonTarget, isMoonTarget }]
        }),
        () => {
          this.saveMyCoins()
        }
      )
    }
  }

  toggleAddCoin = () => {
    this.setState(prevState => ({ showAddCoin: !prevState.showAddCoin }))
  }

  render() {
    return (
      <AppWrapper>
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
          <Route path="/welcome" render={() => <WelcomeWindow />} />
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
          <MoonFlagsList
            width={250}
            flags={this.state.myCoins}
            position={this.state.flagPosition}
            isMobile={false}
          />
        </Responsive>
        <Responsive maxWidth={mobile_max}>
          {this.props.location.pathname === '/'
            ? null
            : [
                <Moon animated size={250} position={this.state.moonPosition} />,
                <MoonFlagsList
                  width={250}
                  flags={this.state.myCoins}
                  position={this.state.flagPosition}
                  isMobile={true}
                />
              ]}
        </Responsive>
        <Background />
      </AppWrapper>
    )
  }
}

export default App

const AppWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`
