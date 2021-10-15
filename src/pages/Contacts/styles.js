import styled from "styled-components";

export const Ul = styled.ul`
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  width: 60vw;
  li {
    margin-top: 1%;
    border: var(--black) dotted 2px;
    padding: 10px;
    background-color: #d3d9e0;
    border-radius: 10px;
    width: 80%;
    @media (min-width: 900px) {
      width: 60%;
    }
    display: flex;
  }
`;
