import React, { Component } from 'react'
import styled from 'styled-components'

import CoinRocket from './CoinRocket'

class CoinRocketList extends Component {
  renderCoinShips = () => {
    let coinList = this.props.myCoins.sort((a, b) => {
      var nameA = a.name.toUpperCase() // ignore upper and lowercase
      var nameB = b.name.toUpperCase() // ignore upper and lowercase
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 1
    })

    return coinList.map(coin => {
      let percent = Math.round(coin.price_usd * 100) / coin.moonTarget
      let progress = 100 * (percent / 100)
      return (
        <CoinRocket
          key={coin.id}
          isGoingUp={coin.percent_change_1h > 0}
          coin={coin}
          progress={progress}
        />
      )
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
  top: calc(50vh - 310px);
  position: absolute;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
