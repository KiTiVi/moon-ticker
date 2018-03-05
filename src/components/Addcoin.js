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
  background-color: rgba(28, 63, 75, 0.85);
  border: 4px solid #32515c;
  border-radius: 5px;
  width: 650px;
  overflow-y: auto;
  padding: 20px 35px;
`
const TableBody = styled.tbody``
