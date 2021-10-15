import styled from "styled-components";

export const ContainerHome = styled.div`
  margin-top: 1rem;

  .container-main {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    @media (min-width: 760px) {
      flex-direction: row;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      margin-bottom: 1rem;
      color: Brown;
    }

    p {
      margin: 1rem;
    }
  }
  .imagens {
    width: 100%;
    @media (min-width: 760px) {
      width: 70%;
    }

    img {
      width: 250px;
      height: 180px;
      @media (min-width: 760px) {
        height: 680px;
        width: 800px;
      }
    }
  }

  .video-container {
    margin-left: 1rem;
    width: 70%;
    @media (min-width: 760px) {
      margin: 0 auto;
    }
  }

  .video {
    width: 300px;
    height: 200px;
    @media (min-width: 760px) {
      width: 400px;
      height: 200px;
      margin: 0 auto;
    }
  }
`;
