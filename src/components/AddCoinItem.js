import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

import { desktop_min, mobile_max } from '../helpers/mediaQueries'

class AddCoinItem extends Component {
  state = {
    value: '',
    error: null
  }

  componentDidMount() {
    this.renderValue()
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
  }

  handleChange = e => {
    const input = e.target.value
    this.setState({ value: input, error: null })
  }

  renderValue = () => {
    console.log(this.props.myCoins)
    this.props.myCoins.map(coin => {
      if (coin.id === this.props.coin.id) {
        return this.setState({ value: coin.moonTarget })
      } else {
        return console.log('Fanns inte')
      }
    })
  }
  renderCoinIconPath = () => {
    switch (this.props.coin.id) {
      case 'bitcoin':
        return 'bitcoin.png'
        break
      case 'stellar':
        return 'stellar.png'
        break
      case 'ripple':
        return 'ripple.png'
        break
      case 'tron':
        return 'tron.png'
        break
      case 'ethereum':
        return 'ether.png'
        break
      default:
        return 'bitcoin.png'
        break
    }
  }
  render() {
    const { name, price_usd } = this.props.coin

    return (
      <CoinRow>
        <CoinIcon>
          <CoinImage src={'/assets/' + this.renderCoinIconPath()} alt="icon" />
        </CoinIcon>
        <CoinName>{name}</CoinName>
        <CoinPrice>${price_usd}</CoinPrice>
        <CoinInput>
          <CoinForm onSubmit={this.handleSubmit}>
            <CoinInputField
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Target Rate"
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
  font-size: 20px;

  @media (max-width: ${mobile_max}px) {
    flex-wrap: wrap;
    height: auto;
    justify-content: space-between;
  }
`
const CoinIcon = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: ${mobile_max}px) {
    width: auto;
  }
`
const CoinImage = styled.img`
  height: 100%;
  @media (max-width: ${mobile_max}px) {
    height: 40px;
  }
`
const CoinName = styled.div`
  width: 20%;
  text-align: center;
  @media (max-width: ${mobile_max}px) {
    width: auto;
  }
`
const CoinPrice = styled.div`
  width: 20%;
  @media (max-width: ${mobile_max}px) {
    width: auto;
  }
`

const CoinInput = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  position: relative;

  @media (max-width: ${mobile_max}px) {
    width: 100%;
    margin-top: 5px;
  }
`
const CoinForm = styled.form`
  width: 70%;
  @media (max-width: ${mobile_max}px) {
    width: 100%;
  }
`

const CoinInputField = styled.input`
  height: 100%;
  width: 95%;
  background: rgba(255, 255, 255, 0.25);
  border: 0;
  color: white;
  font-size: 20px;
  text-align: center;
  clip-path: polygon(0 0, 100% 3%, 98% 100%, 0 98%);
  &:focus {
    outline: none;
  }
`

const skewingBlock = keyframes`
  0% {
    clip-path: polygon(0 0, 98% 3%, 98% 98%, 0 100%);
  }
  50% {
    clip-path: polygon(4% 6%, 100% 0, 100% 100%, 2% 98%);
  }
  100% {
    clip-path: polygon(0 0, 98% 3%, 98% 98%, 0 100%);
  }
`
const CoinButton = styled.button`
  height: 100%;
  min-width: 100px;
  background: #142f40;
  border: 0;
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
  color: #2ac16f;
  box-shadow: 0 4px 12px -4px rgba(0, 0, 0, 0.5);
  &:hover {
    animation: ${skewingBlock} 1s infinite linear;
  }
  &:active {
    animation: none;
    transform: scale(0.92);
    box-shadow: inset 0 2px 10px -4px rgba(0, 0, 0, 0.5);
  }
  &:focus {
    outline: none;
  }
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

  @media (max-width: ${mobile_max}px) {
    left: 0;
    top: 30px;
  }
`
