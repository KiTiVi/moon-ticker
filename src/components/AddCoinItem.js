import React, { Component } from 'react'
import styled from 'styled-components'

class AddCoinItem extends Component {
  state = {
    value: null,
    error: null
  }

  handleSubmit = e => {
    const { price_usd, name } = this.props.coin
    e.preventDefault()
    if (this.state.value === null) {
      return this.setState({
        error: 'Please provide a value'
      })
    }
    if (Number(price_usd) >= this.state.value) {
      return this.setState({
        error: `Moon target needs to be greater than ${name}'s current price of $${price_usd}`
      })
    }

    // Validation complete - lets submit! :)
    alert(this.state.value)
  }

  handleChange = e => {
    const input = e.target.value
    this.setState({ value: input })
    if (input == '') {
      this.setState({ error: null })
    }
  }

  render() {
    const { name, price_usd } = this.props.coin

    return (
      <CoinRow>
        <CoinIcon>HEJ</CoinIcon>
        <CoinName>{name}</CoinName>
        <CoinPrice>${price_usd}</CoinPrice>
        <CoinInput>
          <form onSubmit={this.handleSubmit}>
            <input
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
              step="0.00001"
              required
            />
          </form>
          <button onClick={this.handleSubmit}>ADD</button>
          {this.state.error ? <div>{this.state.error}</div> : null}
        </CoinInput>

        <td />
      </CoinRow>
    )
  }
}

export default AddCoinItem

const CoinRow = styled.tr`
  display: flex;
  width: 100%;
  height: 50px;
`
const CoinIcon = styled.figure`
  width: 20%;
  margin: 0;
`
const CoinName = styled.td`
  width: 20%;
`
const CoinPrice = styled.td`
  width: 20%;
`
const CoinInput = styled.td`
  display: flex;
  width: 40%;
`
