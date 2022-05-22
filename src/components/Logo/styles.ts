import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    color: rgba(238, 233, 219, 1);

    margin-left: .5625rem;
    cursor: pointer;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  background-color: rgba(238, 233, 219, 1);
  border-radius: .375rem;

  > img {
    width: 1rem;
    height: 1rem;
  }
`