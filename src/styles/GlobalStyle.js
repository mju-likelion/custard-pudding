import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './font.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'GmarketSans', 'nanumgothic', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'GmarketSans', 'nanumgothic', sans-serif;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;     
  }

  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* 가로 스크롤 방지 */
  }
  
  #root {
    height: 100%;
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
