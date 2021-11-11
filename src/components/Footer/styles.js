import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 15vh;
  a {
    color: white;
  }
  h3 {
    color: white;
    margin-bottom: 10px;
  }
  ul {
    margin-top: 5px;
    margin-bottom: 10px;
    display: flex;
  }
  li {
    color: white;
    margin-right: 10%;
  }
  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    a {
      color: white;
      display: flex;
      svg {
        font-size: 20px;
        margin-right: 4px;
      }
    }
    ul {
      display: flex;
      align-items: center;
      li {
        margin-right: 20px;
        color: white;
      }
    }
  }
`;
