import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const H1 = styled.h1`
  font-size: 3rem;
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2%;
  flex-wrap: wrap;
  width: 90vw;
  img {
    width: 80%;
    margin-left: 10%;
    @media (min-width: 900px) {
      width: 80%;
      height: 400px;
    }
  }

  div {
    :nth-child(2) {
      margin: 20px;
    }
  }

  li {
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 600px;
    width: 100%;
    margin-top: 2%;

    @media (min-width: 900px) {
      width: 30%;
      box-shadow: 5px 5px 15px 5px #000000;
    }
  }
  button {
    width: 60%;
    height: 7%;
    background-color: var(--blue);
    color: var(--white);
    border-radius: 20px;
    :hover {
      opacity: 0.7;
    }
  }
`;
