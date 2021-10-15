import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: var(--green);
  justify-content: space-around;
  align-items: center;
  height: 8vh;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > div:first-child {
    a:hover {
      background-color: transparent;
    }
  }
  img {
    border-radius: 100%;
    cursor: pointer;
    height: 55px;
    width: 55px;
    @media (min-width: 900px) {
      height: 60px;
      width: 60px;
    }
  }

  .image {
    padding: 0;
  }

  a {
    background-color: var(--green);
    margin-left: 15px;
    border-radius: 5%;
    border: none;
    color: var(--white);
    padding: 0.5rem;
    &:hover {
      background-color: #d9d900;
    }

    @media (min-width: 900px) {
      cursor: pointer;
      &:active {
        box-shadow: 0 5px #666;
        transform: translateY(2px);
      }
    }
  }

  .icon-container {
    cursor: pointer;
    color: var(--white);
    font-size: 30px;
  }
`;
