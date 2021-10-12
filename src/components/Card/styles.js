import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  align-items: center;

  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 2%;
  flex-wrap: wrap;
  width: 90vw;
  margin-left: 2%;
  @media (min-width: 900px) {
    flex-direction: row;
  }
  img {
    width: 80%;
    height: 350px;

    @media (min-width: 500px) {
      width: 100%;
      height: 350px;
    }
    @media (min-width: 900px) {
      margin-top: 14%;
      margin-left: 2%;
      width: 80%;
      height: 400px;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

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
    margin-top: 4%;
    height: 600px;
    width: 80%;
    box-shadow: 5px 5px 15px 5px #000000;
    @media (min-width: 900px) {
      width: 30%;
    }
  }
  button {
    width: 60%;
    height: 8%;
    background-color: var(--blue);
    color: var(--white);
    border-radius: 20px;
    margin-bottom: 10%;

    :hover {
      opacity: 0.7;
    }
  }
  p {
    margin-top: 5%;
  }
`;
