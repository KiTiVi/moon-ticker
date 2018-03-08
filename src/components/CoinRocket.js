import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

import RocketFire from './RocketFire'
import RocketSmoke from './RocketSmoke'

import coinIconPath from '../helpers/coinIconPath'

class CoinRocket extends Component {
  render() {
    const {
      isGoingUp,
      progress,
      coin: { name, moonTarget, price_usd, symbol, percent_change_1h },
      coin
    } = this.props
    return (
      <RocketPosition progress={progress}>
        <Rocket onClick={() => console.log('Routa till detail sida')}>
          <RocketHoverIcon>
            <img src={coinIconPath(coin)} alt="coin-icon" />
          </RocketHoverIcon>
          <RocketHoverInfo>
            <h4>{name}</h4>
            <p>${price_usd}</p>
            <p>{percent_change_1h}%</p>
          </RocketHoverInfo>
          <RocketRotate isGoingUp={isGoingUp}>
            <RocketInner>
              {isGoingUp && <RocketFire />}
              {!isGoingUp && <RocketSmoke />}
              <RocketBody
                isGoingUp={isGoingUp}
                src={'/assets/rocket.png'}
                alt="rocket"
              />
              <RocketTag isGoingUp={isGoingUp}>{symbol}</RocketTag>
            </RocketInner>
          </RocketRotate>
        </Rocket>
      </RocketPosition>
    )
  }
}

export default CoinRocket

const flyingUpDown = keyframes`
0% {
transform: translateY(3px);
}
50% {
transform: translateY(-3px);
}
100% {
transform: translateY(3px);
}
`
const RocketPosition = styled.li`
  transition: 4s all cubic-bezier(0.84, 0.07, 0.43, 1);
  left: ${props => props.progress + '%'};
  position: relative;
`
const RocketHoverInfo = styled.div`
  background: #164454b0;
  border: 8px solid #32515c;
  height: 100px;
  width: 200px;
  z-index: 1;
  position: absolute;
  visibility: hidden;
  top: -110px;
  clip-path: polygon(0 0, 98% 9%, 98% 98%, 4% 100%);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h4 {
    font-size: 20px;
    margin-bottom: 6px;
  }
  p {
    font-size: 18px;
    margin-bottom: 2px;
  }

  &:after {
    content: ' ';
    position: absolute;
    top: 60%;
    left: 88%;
    border-width: 10px;
    border-style: solid;
    border-color: transparent #000000d9 transparent transparent;
  }
`
const RocketHoverIcon = styled.figure`
  background: #123d4c;
  border: 4px solid #32515c;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  overflow: hidden;
  visibility: hidden;
  position: absolute;
  top: -132px;
  left: -16px;
  z-index: 2;
  img {
    height: inherit;
    width: inherit;
    object-fit: contain;
    position: relative;
    top: -3px;
    left: -4px;
  }
`

const Rocket = styled.div`
  position: relative;
  z-index: 2;
  cursor: pointer;
  &:hover {
    ${RocketHoverInfo} {
      visibility: visible;
    }
    ${RocketHoverIcon} {
      visibility: visible;
    }
  }
`

const RocketRotate = styled.div`
  transform: ${props => (props.isGoingUp ? null : 'rotate(-10deg)')};
  display: inline-block;
`
const RocketInner = styled.div`
  display: flex;
  position: relative;
  animation: ${flyingUpDown} 3s infinite ease-in-out;
`
const RocketBody = styled.img`
  height: 50px;
  z-index: 2;
  transform: ${props => (props.isGoingUp ? null : 'rotate(180deg)')};
`

const RocketTag = styled.p`
  position: absolute;
  right: ${props => (props.isGoingUp ? '20px' : '35px')};
  z-index: 3;
  color: #142f40;
  top: 18px;
  font-size: 14px;
`
