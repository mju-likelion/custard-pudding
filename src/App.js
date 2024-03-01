import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import RoutesContainer from './components/RoutesContainer';
import useRouteTracker from './hooks/useRouteTracker';

function App() {
  useRouteTracker();

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <RoutesContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
