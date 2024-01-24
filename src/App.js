import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import RoutesContainer from './components/RoutesContainer';
import BigButton from './components/Button/BigButton';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <BigButton text="지원하기" disabled={true} />
        <RoutesContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
