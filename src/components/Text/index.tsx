import React from "react";

import { Container, Wrapper } from './styles'

const Text: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <h3>Build your own wall of sound.</h3>
        <p>Winners aren’t made overnight. Over 50 years of sound and design expertise has been distilled into each and every Marshall speaker, bringing that big stage presence home for your listening enjoyment.</p>
      </Wrapper>
      <button>
        <a href="#">View All Products</a>
      </button>
    </Container>
  )
}

export default Text