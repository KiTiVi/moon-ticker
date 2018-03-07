import React, { Component } from 'react'
import styled from 'styled-components'

import CoinRocket from './CoinRocket'

class CoinRocketList extends Component {
  renderCoinShips = () => {
    return this.props.myCoins.map(coin => {
      let percent = Math.round(coin.price_usd * 100) / coin.moonTarget
      let progress = 100 * (percent / 100)
      console.log(percent)
      console.log(progress)
      return <CoinRocket key={coin.id} coin={coin} progress={progress} />
    })
  }

  render() {
    return <CoinPath>{this.renderCoinShips()}</CoinPath>
  }
}

export default CoinRocketList

const CoinPath = styled.ul`
  width: calc(100vw - 210px);
  height: 550px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
