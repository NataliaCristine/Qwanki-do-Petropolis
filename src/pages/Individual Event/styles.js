import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3%;
  align-items: center;
  font-size: 1.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
  }
  img {
    width: 80%;
    margin-top: 14%;
    @media (min-width: 900px) {
      margin-left: 10%;
      width: 80%;
      height: 400px;
    }
  }
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      margin-bottom: 10px;
    }
  }
  ul {
    margin-left: 6%;
  }
  .description {
    margin: 20px 0 20px 0;

    @media (min-width: 900px) {
      margin-bottom: 90%;
    }
  }
`;
