import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  article {
    @media (min-width: 768px) {
      display: flex;
    }
  }

  h1,
  h2 {
    margin: 1rem;
  }
  .history {
    flex-direction: column;
    margin: 1rem;
    text-align: justify;
    line-height: 1.5rem;
    color: var(--grey);
  }

  .graoMestre {
    margin: 0 auto;
    height: 300px;
    width: 300px;
    @media (min-width: 768px) {
      height: 571px;
      width: 696px;
    }
  }
  .mestre {
    flex-direction: column;
    margin: 1rem;
    text-align: justify;
    line-height: 1.5rem;
    p {
      color: var(--grey);
    }
  }

  .mestreEvandro {
    width: 284px;
    margin: 0 auto;
    @media (min-width: 768px) {
      display: block;
      height: 500px;
      width: 700px;
      margin: 1rem;
    }
    .imageEvandro {
      width: 284px;
      @media (min-width: 768px) {
        height: 500px;
        width: 700px;
        margin: 1rem;
      }
    }
  }
`;
