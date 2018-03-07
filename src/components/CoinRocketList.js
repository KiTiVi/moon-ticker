import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

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
    return [
      <CoinPath key="1">{this.renderCoinShips()}</CoinPath>,
      <ToggleAddButton key="2" onClick={this.props.toggleAddCoin}>
        COINS
      </ToggleAddButton>
    ]
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
const addButtonAnimation = keyframes`
  0% {
    clip-path: polygon(11% 3%, 94% 0, 94% 100%, 9% 97%);
  }
  50% {
    clip-path: polygon(2% 2%, 100% 5%, 100% 96%, 0 100%);
  }
  100% {
    clip-path: polygon(11% 3%, 94% 0, 94% 100%, 9% 97%);
  }
`

const ToggleAddButton = styled.button`
  animation: ${addButtonAnimation} 10s infinite linear;
  background: #ffb52c;
  color: #3e3e3e;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0 4px 12px -4px rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 200px;
  height: 80px;
  z-index: 1;
`
