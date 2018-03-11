import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { Show } from './animations/Flag'
import { desktop_min, mobile_max } from '../helpers/mediaQueries'

const MoonFlag = ({ iconSrc, animationTime }) => (
  <FlagHolder animationTime={animationTime}>
    <FlagPole />
    <Flag />
    <Icon src={iconSrc} />
  </FlagHolder>
)

MoonFlag.propTypes = {}

export default MoonFlag

const FlagHolder = styled.div`
  position: relative;
  animation: ${Show} ${props => `${props.animationTime}s`} linear;
  @media (min-width: ${desktop_min}px) {
    height: 100px;
  }
  @media (max-width: ${mobile_max}px) {
    height: 80px;
  }
`

const FlagPole = styled.div`
  background-color: #3e3e3e;
  border-radius: 5px;
  width: 5px;
  @media (min-width: ${desktop_min}px) {
    height: 100px;
  }
  @media (max-width: ${mobile_max}px) {
    height: 80px;
  }
  &:before {
    position: absolute;
    top: -8px;
    left: -3px;
    display: block;
    background-color: #3e3e3e;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    content: '';
  }
`

const Flag = styled.div`
  position: absolute;
  top: 5px;
  background-color: #32515c;
  border: 1px solid #32515c;

  @media (min-width: ${desktop_min}px) {
    width: 75px;
    height: 45px;
  }
  @media (max-width: ${mobile_max}px) {
    width: 55px;
    height: 35px;
  }
`

const Icon = styled.img`
  position: absolute;
  object-fit: contain;
  @media (min-width: ${desktop_min}px) {
    height: 30px;
    width: 30px;
    top: 12px;
    left: 22px;
  }
  @media (max-width: ${mobile_max}px) {
    height: 20px;
    width: 20px;
    top: 12px;
    left: 18px;
  }
`
