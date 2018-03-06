import React, { Component } from 'react'
import styled from 'styled-components'

class CoinShips extends Component {
  renderCoinShips = () => {
    return this.props.myCoins.map(coin => {
      let percent = Math.round(coin.price_usd * 100) / coin.moonTarget
      let progress = 900 * (percent / 100)
      console.log(percent)
      console.log(progress)
      return (
        <CoinShip key={coin.id} style={{left: progress}}><p>{coin.symbol}</p></CoinShip>
      )
    })
  }

  // procent:
  // price_usd * 100 / moonTarget
  // 900px * procent = hur långt från left skeppet ska vara
  render() {
    return (
      <CoinPath>
        {this.renderCoinShips()}
      </CoinPath>
    )
  }
}

export default CoinShips

const CoinPath = styled.ul`
  width: 900px;
  height: 5px;
  list-style: none
`

const CoinShip = styled.li`
  position: relative;
`
