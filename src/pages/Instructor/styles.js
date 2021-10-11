import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  .carousel {
    width: 90%;
    margin: 0 auto;

    @media (min-width: 760px) {
      width: 70%;
    }
  }
  .eventos-carousel {
    margin: 1rem;
  }

  h2 {
    margin: 1.5rem;
    margin-top: 2rem;
  }
  .conteiner-cart-principal {
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    @media (min-width: 768px) {
      flex-direction: row;
      flex-flow: wrap;
    }
  }
  .conteiner-cart {
    flex-direction: column;
    flex-flow: wrap;
    width: 250px;
    margin: 10px;
    padding-bottom: 15px;
    border: 1px solid lightgrey;
    box-shadow: 10px 5px 5px grey;
    @media (min-width: 768px) {
      width: 400px;
    }
    img {
      width: 100px;
      height: 200px;
      @media (min-width: 768px) {
        width: 200px;
        height: 400px;
      }
    }

    strong {
      font-size: 1rem;
    }
    p {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 15px;
      width: 220px;
      text-align: center;
      margin-left: 10px;
      @media (min-width: 768px) {
        width: 350px;
        margin-left: 20px;
      }
    }
  }
`;
