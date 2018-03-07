import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

class RocketFire extends Component {
  render() {
    return (
      <Scale>
        <RocketFireContainer>
          <Red />
          <Orange />
          <Yellow />
          <White />
          <Blue />
          <Black />
        </RocketFireContainer>
      </Scale>
    )
  }
}

export default RocketFire

const flicker = keyframes`
  0%   {transform: rotate(-1deg);}
  20%  {transform: rotate(1deg);}
  40%  {transform: rotate(-1deg);}
  60%  {transform: rotate(1deg) scaleY(1.04);}
  80%  {transform: rotate(-2deg) scaleY(0.92);}
  100% {transform: rotate(1deg);}
`

const Scale = styled.div`
  transform: scale(0.4) rotate(-90deg);
  position: relative;
  left: 28px;
  z-index: 1;
  bottom: 5px;
`

const RocketFireContainer = styled.div`
  width: 60px;
  height: 60px;
  transform-origin: center bottom;
  animation-name: ${flicker};
  animation-duration: 3ms;
  animation-delay: 200ms;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`

const Flame = styled.div`
  bottom: 0;
  position: absolute;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
  transform: rotate(-45deg) scale(1.5, 1.5);
`

const Yellow = Flame.extend`
  left: 15px;
  width: 30px;
  height: 30px;
  background: gold;
  box-shadow: 0px 0px 9px 4px gold;
`

const Orange = Flame.extend`
  left: 10px;
  width: 40px;
  height: 40px;
  background: orange;
  box-shadow: 0px 0px 9px 4px orange;
`

const Red = Flame.extend`
  left: 5px;
  width: 50px;
  height: 50px;
  background: OrangeRed;
  box-shadow: 0px 0px 5px 4px OrangeRed;
`
const White = Flame.extend`
  left: 15px;
  bottom: -4px;
  width: 30px;
  height: 30px;
  background: white;
  box-shadow: 0px 0px 9px 4px white;
`
const Circle = styled.div`
  border-radius: 50%;
  position: absolute;
`

const Blue = Circle.extend`
  width: 10px;
  height: 10px;
  left: 25px;
  bottom: -25px;
  background: SlateBlue;
  box-shadow: 0px 0px 15px 10px SlateBlue;
`

const Black = Circle.extend`
  width: 40px;
  height: 40px;
  left: 10px;
  bottom: -60px;
  background: black;
  box-shadow: 0px 0px 15px 10px black;
`

// @keyframes flicker{
//   0%   {transform: rotate(-1deg);}
//   20%  {transform: rotate(1deg);}
//   40%  {transform: rotate(-1deg);}
//   60%  {transform: rotate(1deg) scaleY(1.04);}
//   80%  {transform: rotate(-2deg) scaleY(0.92);}
//   100% {transform: rotate(1deg);}
// }
