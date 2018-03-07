import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

class RocketSmoke extends Component {
  render() {
    return (
      <Smoke>
        <Dot1 />
        <Dot2 />
        <Dot3 />
        <Dot4 />
        <Dot5 />
        <Dot6 />
        <Dot7 />
        <Dot8 />
        <Dot9 />
        <Dot10 />
      </Smoke>
    )
  }
}

export default RocketSmoke

const Smoke = styled.div`
  position: absolute;
  z-index: 1;
  width: 1px;
  left: 60px;
  bottom: 23px;
`

const SmokeDot = styled.span`
  display: block;
  position: absolute;
  bottom: -35px;
  left: 50%;
  margin-left: -20px;
  height: 0px;
  width: 0px;
  border: 35px solid #4b4b4b;
  border-radius: 35px;
  left: -14px;
  opacity: 0;
  transform: scale(0.2);
`

const smokeL = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.2) translateX(0)
  }
  20% {
    opacity: 1;
    transform: scale(0.2) translateX(15px)
  }
  100% {
    opacity: 0;
    transform: scale(1) translateX(130px) translateX(-20px)
  }
`

const smokeR = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.2) translateX(0)
  }
  20% {
    opacity: 1;
    transform: scale(0.2) translateX(15px)
  }
  100% {
    opacity: 0;
    transform: scale(1) translateX(130px) translateY(20px)
  }
`

const Dot1 = SmokeDot.extend`
  animation: ${smokeL} 10s 0s infinite;
`
const Dot2 = SmokeDot.extend`
  animation: ${smokeR} 10s 1s infinite;
`
const Dot3 = SmokeDot.extend`
  animation: ${smokeL} 10s 2s infinite;
`
const Dot4 = SmokeDot.extend`
  animation: ${smokeR} 10s 3s infinite;
`
const Dot5 = SmokeDot.extend`
  animation: ${smokeL} 10s 4s infinite;
`
const Dot6 = SmokeDot.extend`
  animation: ${smokeR} 10s 5s infinite;
`
const Dot7 = SmokeDot.extend`
  animation: ${smokeL} 10s 6s infinite;
`
const Dot8 = SmokeDot.extend`
  animation: ${smokeR} 10s 7s infinite;
`
const Dot9 = SmokeDot.extend`
  animation: ${smokeL} 10s 8s infinite;
`
const Dot10 = SmokeDot.extend`
  animation: ${smokeR} 10s 9s infinite;
`

/* Smoke animation */

// @mixin keyframes($name) {
//     @-webkit-keyframes #{$name} { @content; }
//     @-moz-keyframes #{$name} { @content; }
//     @-o-keyframes #{$name} { @content; }
//     @keyframes #{$name} { @content; }
// }

// @mixin animation($parameters) {
//     -webkit-animation: $parameters;
//     -moz-animation: $parameters;
//     -o-animation: $parameters;
//     animation: $parameters;
// }

// @include keyframes(smokeL) {
// 	0%   { @include transform(scale(0.2) translate(0, 0)) }
// 	10%  { opacity: 1; @include transform(scale(0.2) translate(0, -5px)) }
// 	100% { opacity: 0; @include transform(scale(1) translate(-20px, -130px)) }
// }

// @include keyframes(smokeR) {
// 	0%   { @include transform(scale(0.2) translate(0, 0)) }
// 	10%  { opacity: 1; @include transform(scale(0.2) translate(0, -5px)) }
// 	100% { opacity: 0; @include transform(scale(1) translate(20px, -130px)) }
// }

// #smoke .s0 { @include animation(smokeL 10s 0s infinite) }
// #smoke .s1 { @include animation(smokeR 10s 1s infinite) }
// #smoke .s2 { @include animation(smokeL 10s 2s infinite) }
// #smoke .s3 { @include animation(smokeR 10s 3s infinite) }
// #smoke .s4 { @include animation(smokeL 10s 4s infinite) }
// #smoke .s5 { @include animation(smokeR 10s 5s infinite) }
// #smoke .s6 { @include animation(smokeL 10s 6s infinite) }
// #smoke .s7 { @include animation(smokeR 10s 7s infinite) }
// #smoke .s8 { @include animation(smokeL 10s 8s infinite) }
// #smoke .s9 { @include animation(smokeR 10s 9s infinite) }

// /* No animations? Display a static smoke image */

// .disableAnimations #smoke,
// .no-cssanimations #smoke {
// 	width: 86px;
// 	margin-left: -25px;
// 	bottom: 146px;
// 	background: url('../img/smokeNoAni.png') no-repeat center bottom;
// }
