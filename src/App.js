import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import RoutesContainer from './components/RoutesContainer';
import SmallButton from './components/checkPage/SmallButton';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <SmallButton>확인하기</SmallButton>
        <RoutesContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
