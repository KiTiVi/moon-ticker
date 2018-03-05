import React, { Component } from 'react'
import styled from 'styled-components'
import '../styles/App.css'
import AddCoinItem from './AddCoinItem'

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
`

const CoinList = styled.ul`
  background-color: gray;
  max-height: 40vh;
  width: 550px;
  overflow-y: auto;
  padding: 5px;
`
const TableBody = styled.tbody``
