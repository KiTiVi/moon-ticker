import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

import { desktop_min, mobile_max } from '../helpers/mediaQueries'

import CallToActionButton from './CallToActionButton'

class WelcomeWindow extends React.Component {
  render() {
    return (
      <PositionHelper>
        <WelcomeWindowWrapper>
          <WelcomeHeader>
            Track your <OrangeText>Coins!</OrangeText>
          </WelcomeHeader>
          <p>
            Enter your target rate and track your coins journey to the Moon!
          </p>
          <CallToActionButton
            key="2"
            title="GET STARTED"
            callBack={() => this.props.history.push('/addcoin')}
          />
        </WelcomeWindowWrapper>
      </PositionHelper>
    )
  }
}

export default withRouter(WelcomeWindow)

const PositionHelper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`

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
    margin-top: 5%;
    padding: 30px 20px;
    max-height: 84vh;
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
