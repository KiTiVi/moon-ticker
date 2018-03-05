import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <header>
      <Logo>MOON TICKER</Logo>
    </header>
  )
}

export default Header

const Logo = styled.h1`
  margin-left: 25px;
  font-size: 60px;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black,
    4px 4px 0 #f3e336;
`
