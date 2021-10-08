import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {

    --white: #ffffff;
    --black: #000000;
    --gray: #E5E5E5;
    --green: #449500;
    --blue:#002270;
    --yellow: #F1FF70;
    --red: #FF0000;
  }

  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    list-style-type: none;
  }

  a {
    color: var(--black);
    text-decoration: none;

    cursor: pointer;
  }

  button {
    cursor: pointer;
  }
`;
