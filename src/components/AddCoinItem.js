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
          <CoinForm onSubmit={this.handleSubmit}>
            <CoinInputField
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
              step="0.00001"
              required
            />
          </CoinForm>
          <CoinButton onClick={this.handleSubmit}>
            <CheckCircle>✓</CheckCircle>
          </CoinButton>
          {this.state.error && <ErrorWrapper>{this.state.error}</ErrorWrapper>}
        </CoinInput>
      </CoinRow>
    )
  }
}

export default AddCoinItem

const CoinRow = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 18px;
`
const CoinIcon = styled.div`
  width: 10%;
  height: 100%;
`
const CoinImage = styled.img`
  height: 100%;
`
const CoinName = styled.div`
  width: 20%;
  text-align: center;
`
const CoinPrice = styled.div`
  width: 20%;
`

const CoinInput = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  position: relative;
`
const CoinForm = styled.form`
  width: 70%;
`

const CoinInputField = styled.input`
  height: 100%;
  width: 100%;
  border: 0;
  border-radius: 5px 0 0 5px;
  font-size: 20px;
  text-align: center;
`
const CoinButton = styled.button`
  height: 100%;
  min-width: 100px;
  background: #142f40;
  border: 0;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
  color: #2ac16f;
`
const CheckCircle = styled.div`
  border-radius: 50%;
  background: #142f40;
  height: 35px;
  width: 35px;
  margin: 0 auto;
  border: 2px solid #2ac16f;
  line-height: 1.35;
`
const ErrorWrapper = styled.div`
  position: absolute;
  z-index: 99999;
  top: 50px;
  left: -50px;
  max-width: 300px;
  text-align: center;
  padding: 10px;
  background: #e64949;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 1px rgba(130, 27, 27, 0.3);
`
