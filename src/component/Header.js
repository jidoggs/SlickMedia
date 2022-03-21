import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const StyledHeader = styled.header`
    background-color:#292929;
    padding: 40px 77px;
    display:flex;

    @media (max-width: 834px) {
    align-items: center;
    justify-content: center;
  }
    @media (max-width: 425px) {
      padding: 16px 0;
  }

`

function Header() {
  return (
    <StyledHeader>
        <Logo />
    </StyledHeader>
  )
}

export default Header