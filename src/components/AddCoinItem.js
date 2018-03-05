import React, { Component } from 'react'
import styled from 'styled-components'

class AddCoinItem extends Component {
  state = {
    value: '',
    error: null
  }

  handleSubmit = e => {
    const { price_usd, name } = this.props.coin
    e.preventDefault()
    if (this.state.value === '') {
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
    this.props.onAddCoin(this.props.coin, this.state.value)
    this.setState({ value: '' })
  }

  handleChange = e => {
    const input = e.target.value
    this.setState({ value: input, error: null })
  }

  render() {
    const { name, price_usd } = this.props.coin

    return (
      <CoinRow>
        <CoinIcon>
          <CoinImage src={'/assets/bitcoin.png'} alt="icon" />
        </CoinIcon>
        <CoinName>{name}</CoinName>
        <CoinPrice>${price_usd}</CoinPrice>
        <CoinInput>
          <form onSubmit={this.handleSubmit}>
            <CoinInputField
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
              step="0.00001"
              required
            />
          </form>
          <CoinButton onClick={this.handleSubmit}>ADD</CoinButton>
          {this.state.error && <ErrorWrapper>{this.state.error}</ErrorWrapper>}
        </CoinInput>
      </CoinRow>
    )
  }
}

export default AddCoinItem

const CoinRow = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 5px 0;
`
const CoinIcon = styled.div`
  width: 15%;
  height: 100%;
`
const CoinImage = styled.img`
  height: 100%;
`
const CoinName = styled.div`
  width: 20%;
`
const CoinPrice = styled.div`
  width: 20%;
`
const CoinInput = styled.div`
  display: flex;
  height: 100%;
  position: relative;
`
const CoinInputField = styled.input`
  height: 100%;
  border: 0;
`
const CoinButton = styled.button`
  height: 100%;
  min-width: 100px;
  background: #0dadd2;
  border: 0;
  cursor: pointer;
`
const ErrorWrapper = styled.div`
  position: absolute;
  z-index: 99999;
  top: 40px;
  padding: 10px;
  background: red;
  border-radius: 10px;
`
