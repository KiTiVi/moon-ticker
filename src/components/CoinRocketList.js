import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import Responsive from 'react-responsive'

import { desktop_min, mobile_max } from '../helpers/mediaQueries'

import CoinRocket from './CoinRocket'
import Moon from './Moon'
import CallToActionButton from './CallToActionButton'

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
      <CoinPath key="1">
        {this.renderCoinShips()}
        <Responsive maxWidth={mobile_max}>
          <Moon
            animated
            size={250}
            position={{
              top: 250,
              right: -285
            }}
          />
        </Responsive>
      </CoinPath>,
      <CallToActionButton
        key="2"
        title="COINS"
        isHidden={this.props.isShowingAddCoin}
        isAbsolute
        callBack={this.props.toggleAddCoin}
      />
    ]
  }
}

export default CoinRocketList

const CoinPath = styled.ul`
  height: 550px;
  position: absolute;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (min-width: ${desktop_min}px) {
    width: calc(100vw - 210px);
    top: calc(50vh - 300px);
  }
  @media (max-width: ${mobile_max}px) {
    width: 1200px;
    overflow-y: scroll;
    height: 750px;
    padding-top: 200px;
    bottom: 0;
  }
`
