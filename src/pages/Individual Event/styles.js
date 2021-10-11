import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 3%;
  align-items: center;
  font-size: 1.5rem;
  img {
    width: 600px;
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
    margin-bottom: 90%;
  }
`;
