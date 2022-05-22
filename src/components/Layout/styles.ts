import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* max-width: calc(100% - 165px); */
  /* margin: 41px auto 0; */
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2.5625rem 10.3125rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  max-height: 31.25rem;

  img {
    width: 50%;
    height: 40rem;
  }
`