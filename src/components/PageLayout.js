import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

const PageLayout = () => {
  return (
    <PageContainer>
      <Header />
      <Outlet />
      <Footer />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100vw;
  height: 100%;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  background-color: ${({ theme }) => theme.colors.PAGE_BG};
`;
export default PageLayout;
