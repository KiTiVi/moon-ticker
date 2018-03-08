import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { desktop_min, mobile_max } from '../helpers/mediaQueries'

const WelcomeWindow = () => {
  return (
    <WelcomeWindowWrapper>
      <WelcomeHeader>
        Track your <OrangeText>Coins!</OrangeText>
      </WelcomeHeader>
      <p>
        This is the Moon Ticker, the perfect tool for tracking your precious
        coins. The design may not be the most accurate when it comes to view
        changes in rating. But its humorous way of showing the rates sure help
        you to endure the dips.
      </p>
      <p>Get started today and add your first coin!</p>
      <Link to="/addcoin">Add coin</Link>
    </WelcomeWindowWrapper>
  )
}

export default WelcomeWindow

const WelcomeWindowWrapper = styled.div`
  position: relative;
  z-index: 3;
  background-color: rgba(26, 80, 99, 0.85);
  line-height: 1.2em;

  @media (min-width: ${desktop_min}px) {
    width: 650px;
    left: calc(100vw - 950px);
    padding: 20px 35px;
    border: 14px solid #32515c;
    clip-path: polygon(0 0, 97% 3%, 98% 97%, 4% 100%);
  }
  @media (max-width: ${mobile_max}px) {
    width: 95vw;
    margin: 0 auto;
    margin-top: 25px;
    padding: 35px;
    max-height: 82vh;
    border: 10px solid #32515c;
    clip-path: polygon(0 0, 97% 3%, 97% 96%, 3% 96%);
  }
`
const WelcomeHeader = styled.h2`
  text-align: center;
  font-weight: bold;
  padding: 0 0 15px 0;
`

const OrangeText = styled.span`
  color: #ffb52c;
`
