import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

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
        <ToggleButton onClick={this.props.toggleAddCoin}>
          <i className="fas fa-times" />
        </ToggleButton>
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
  z-index: 5;
  @media (min-width: ${desktop_min}px) {
    position: absolute;
    top: 25%;
    left: 45%;
    /*margin: 10vh 0 0 35vw;*/
  }
  @media (max-width: ${mobile_max}px) {
    width: 95vw;
    margin: 0 auto;
    max-width: 650px;
    padding-left: 15px;
  }
`

const CoinList = styled.ul`
  background-color: rgba(26, 80, 99, 0.85);
  border: 14px solid #32515c;
  width: 650px;
  overflow-y: auto;
  clip-path: polygon(0 0, 97% 3%, 98% 97%, 4% 97%);

  @media (min-width: ${desktop_min}px) {
    padding: 20px 35px;
  }
  @media (max-width: ${mobile_max}px) {
    padding: 20px 15px;
    max-height: 82vh;
    clip-path: polygon(0 0, 96% 2%, 96% 97%, 5% 97%);
  }
`

const roundButtonAnimation = keyframes`
0% {
  transform: scale(1);
  box-shadow: inset 0px 0px 1px 0px #e20000b3;
}
50% {
  transform: scale(0.94);
  box-shadow: inset 0px 0px 8px 0px #e20000b3;
}
100% {
  transform: scale(1);
  box-shadow: inset 0px 0px 1px 0px #e20000b3;
}
`

const ToggleButton = styled.button`
  animation: ${roundButtonAnimation} 4s infinite;
  background-color: #ff1745;
  color: #f5f5f5;
  cursor: pointer;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  position: absolute;
  z-index: 5;
  right: 5px;
  top: 0px;
  outline: none;
  border: 3px solid #32515c;
  @media (max-width: ${mobile_max}px) {
    right: 0px;
  }
}
`
