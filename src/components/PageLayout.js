import styled from 'styled-components';
import Footer from './Footer';

const PageLayout = ({ children }) => {
  return (
    <PageContainer>
      {children}
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
