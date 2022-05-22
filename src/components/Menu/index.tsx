import React from "react";

import { Container } from './styles'

const Menu: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>Headphones</li>
        <li>Speakers</li>
        <li>Backstage</li>
        <li>Studio</li>
        <li>Accessories</li>
      </ul>
    </Container>
  )
}

export default Menu