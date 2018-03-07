import React, { Component } from 'react'
import styled from 'styled-components'

class CoinRocket extends Component {
  render() {
    return (
      <Rocket style={{ left: this.props.progress + '%' }}>
        <p>{this.props.coin.symbol}</p>
        <CoinImg
          change={this.props.coin.percent_change_1h}
          src={'/assets/rocket.png'}
          alt="rocket"
        />
      </Rocket>
    )
  }
}

export default CoinRocket

const Rocket = styled.li`
  position: relative;
`

const CoinImg = styled.img`
  height: 50px;
  transform: ${props => (props.change < 0 ? 'rotate(180deg)' : null)};
`
