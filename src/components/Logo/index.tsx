import React from "react";

import { Container, Wrapper } from './styles'
import logo from '../../assets/logo.svg'

const Logo: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="logo" />
      </Wrapper>
      <h4>Kreed</h4>
    </Container>
  )
}

export default Logo
