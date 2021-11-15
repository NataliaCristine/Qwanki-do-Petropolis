import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: #4d4d4d8c;
  display: flex;
  align-items: initial;
  justify-content: flex-end;
  z-index: 1;

  > div {
    display: flex;
    align-items: initial;
    justify-content: flex-end;
  }

  .modal {
    width: 90%;
    min-height: 568px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 600px;
    background-color: var(--white);
    .header-modal {
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .icon-container {
        padding: 15px;

        svg {
          font-size: 30px;
          cursor: pointer;
          color: var(--black);
        }
      }
    }
  }
  .links-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  a {
    margin-bottom: 10px;
    width: 70vw;
  }
`;
