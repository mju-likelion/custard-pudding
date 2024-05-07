import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './styles/index';
import GlobalStyle from './styles/GlobalStyle';
import RoutesContainer from './components/RoutesContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <RoutesContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
