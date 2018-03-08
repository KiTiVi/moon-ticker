import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

import { desktop_min, mobile_max } from '../helpers/mediaQueries'

import CallToActionButton from './CallToActionButton'

class WelcomeWindow extends React.Component {
  render() {
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
        <CallToActionButton
          key="2"
          title="GET STARTED"
          callBack={() => this.props.history.push('/addcoin')}
        />
      </WelcomeWindowWrapper>
    )
  }
}

export default withRouter(WelcomeWindow)

const WelcomeWindowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 3;
  text-align: center;
  background-color: rgba(26, 80, 99, 0.85);
  border: 14px solid #32515c;

  p {
    margin: 20px auto;
    margin-bottom: 40px;
    line-height: 1.3em;
  }

  @media (min-width: ${desktop_min}px) {
    width: 600px;
    margin: 0 auto;
    margin-top: 10vh;
    padding: 35px 35px;
    clip-path: polygon(0 0, 97% 3%, 98% 97%, 4% 97%);
  }
  @media (max-width: ${mobile_max}px) {
    width: 95vw;
    margin: 0 auto;
    margin-top: 10vh;
    padding: 35px 40px;
    max-height: 82vh;
    clip-path: polygon(0 0, 94% 4%, 94% 94%, 4% 94%);
  }
`
const WelcomeHeader = styled.h2`
  font-size: 36px;
  text-align: center;
  padding: 0 0 15px 0;
`

const OrangeText = styled.span`
  color: #ffb52c;
`
