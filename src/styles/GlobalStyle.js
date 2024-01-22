import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }
  button {
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    background-color: transparent;
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
