import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: .875rem;
    color: rgba(238, 233, 219, 1);
    cursor: pointer;

    :not(:last-child) {
      margin-right: 1.25rem;
    }

    :hover {
      color: rgba(242, 192, 52, .8);
      font-style: italic;
    }
  }
`