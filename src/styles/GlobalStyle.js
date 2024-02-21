import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './font.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'GmarketSans', 'nanumgothic', sans-serif;
  }
  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'GmarketSans', 'nanumgothic', sans-serif;
    overflow-x: hidden;
  }
  button {
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    background-color: transparent;

    &:disabled {
      cursor: not-allowed;
    }
  }
  input{
    margin: 0;
    padding: 0;
  }
  input:focus, textarea:focus {
    outline: none;
  }
`;

export default GlobalStyle;
