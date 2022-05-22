import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: auto;

  padding: 0 3rem;
  margin-left: calc(10.3125rem - 3rem);
  margin-bottom: 3rem;

  button {
    margin-top: 3rem;

    width: 12.5rem;
    height: 3.75rem;

    background-color: rgba(242, 192, 52, 1);
    border: none;
    border-radius: .25rem;
    cursor: pointer;

    a {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: .875rem;
      color: rgba(40, 40, 40, 1);
    }

    :hover {
      background-color: rgba(238, 233, 219, 1);
      transition: background .5s;
    }
  }
  `
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 3.625rem;
    color: rgba(238, 233, 219, 1);
  }

  p {
    margin-top: 1.25rem;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: .875rem;
    letter-spacing: .8px;
    color: rgba(238, 233, 219, 1);
  }
`