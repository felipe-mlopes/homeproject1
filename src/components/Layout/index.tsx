import React from 'react'

import sound from '../../assets/sound.svg'
import { Container, Header, Main } from './styles'

import Logo from '../Logo'
import Menu from '../Menu'
import LoginButton from '../LoginButton'
import Text from '../Text'

const Layout: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <div>
          <Menu />
          <LoginButton />
        </div>
      </Header>
    
      <Main>
        <Text />
        <img src={sound} alt="" />
      </Main>
    </Container>
  )
}

export default Layout