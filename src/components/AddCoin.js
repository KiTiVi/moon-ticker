import React, { Component } from 'react'
import styled from 'styled-components'

import AddCoinItem from './AddCoinItem'

import { desktop_min, mobile_max } from '../helpers/mediaQueries'

const VALID_COINS = ['Stellar', 'Ripple', 'Bitcoin', 'Ethereum', 'TRON']

class AddCoin extends Component {
  renderTableRows = () => {
    console.log(this.props.coinData)
    return this.props.coinData
      .filter(coin => VALID_COINS.includes(coin.name))
      .map(coin => {
        return (
          <AddCoinItem
            onAddCoin={this.props.onAddCoin}
            coin={coin}
            key={coin.id}
            myCoins={this.props.myCoins}
          />
        )
      })
  }

  render() {
    return (
      <AddCoinContainer>
        <CoinList>{this.renderTableRows()}</CoinList>
      </AddCoinContainer>
    )
  }
}

export default AddCoin

const AddCoinContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  @media (min-width: ${desktop_min}px) {
    margin: 10vh 0 0 35vw;
  }
  @media (max-width: ${mobile_max}px) {
    max-width: 95vw;
    margin: 0 auto;
  }
`

const CoinList = styled.ul`
  background-color: rgba(26, 80, 99, 0.85);
  border: 14px solid #32515c;
  width: 650px;
  overflow-y: auto;
  clip-path: polygon(0 0, 98% 3%, 98% 98%, 4% 100%);
  z-index: 4;
  &:after {
    content: ' ';
    position: absolute;
    top: 75%;
    left: 73.3%;
    border-width: 10px;
    border-style: solid;
    border-color: transparent #000000d9 transparent transparent;
  }

  @media (min-width: ${desktop_min}px) {
    padding: 20px 35px;
  }
  @media (max-width: ${mobile_max}px) {
    padding: 20px 8px;
    max-height: 82vh;
  }
`
