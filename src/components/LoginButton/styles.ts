import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 8.125rem;
  height: 2.625rem;

  border: 1px solid #EEE9DB;
  border-radius: .625rem;

  margin-left: 3.125rem;
  cursor: pointer;

  a {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: .875rem;
    color: rgba(238, 233, 219, 1);
  }

  :hover {
    background-color: rgba(242, 192, 52, .8);
    transition: background .5s;
    
    a {
      color: rgba(40, 40, 40, 1);
    }
  }
`