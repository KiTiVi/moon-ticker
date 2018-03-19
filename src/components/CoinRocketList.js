import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import Responsive from 'react-responsive'
import MoonFlagsList from './MoonFlagsList'

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

    return coinList.map((coin, index) => {
      //if(!coin.isMoonTarget) {
      let percent = Math.round(coin.price_usd * 100) / coin.moonTarget
      let progress = 100 * (percent / 100)
      return (
        <CoinRocket
          index={index}
          key={coin.id}
          isGoingUp={coin.percent_change_1h > 0}
          coin={coin}
          isMoonTarget={coin.isMoonTarget}
          progress={coin.isMoonTarget ? 100 : progress}
        />
      )
      //}
    })
  }

  render() {
    return (
      <MobileCoinPathWrapper>
        <CoinPath>
          {this.renderCoinShips()}
          <Responsive maxWidth={mobile_max}>
            <Moon
              animated
              size={250}
              position={{
                top: 'auto',
                left: '1200px'
              }}
            />
            <MoonFlagsList
              width={250}
              flags={this.props.myCoins}
              position={{
                top: 'auto',
                left: '1200px'
              }}
              isMobile={true}
            />
          </Responsive>
        </CoinPath>
        <CallToActionButton
          title="COINS"
          isHidden={this.props.isShowingAddCoin}
          isAbsolute
          callBack={this.props.toggleAddCoin}
        />
      </MobileCoinPathWrapper>
    )
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
    width: 100vw;
    overflow-y: scroll;
    height: 100%;
  }
`

const MobileCoinPathWrapper = styled.div`
  @media (max-width: ${mobile_max}px) {
    height: 100%;
    position: relative;
  }
`
