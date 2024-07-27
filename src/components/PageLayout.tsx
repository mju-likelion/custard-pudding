import styled from 'styled-components';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer';

const PageContainer = styled.div`
  width: 100vw;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.background500};
`;

const PageLayout = () => {
  const ScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]); // location.pathname이 변경될 때마다 실행됩니다.
    return null;
  };
  ScrollToTop();

  return (
    <PageContainer>
      <Header />
      <Outlet />
      <Footer />
    </PageContainer>
  );
};

export default PageLayout;
