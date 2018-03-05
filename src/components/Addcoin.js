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
  z-index: 2;
  @media (min-width: ${desktop_min}px) {
    margin: 10vh 0 0 35vw;
  }
  @media (max-width: ${mobile_max}px) {
    margin-top: 5%;
    max-width: 100vw;
  }
`

const CoinList = styled.ul`
  background-color: rgba(28, 63, 75, 0.85);
  border: 4px solid #32515c;
  border-radius: 5px;
  width: 650px;
  overflow-y: auto;

  @media (min-width: ${desktop_min}px) {
    padding: 20px 35px;
  }
  @media (max-width: ${mobile_max}px) {
    padding: 20px 8px;
    max-height: 82vh;
  }
`
