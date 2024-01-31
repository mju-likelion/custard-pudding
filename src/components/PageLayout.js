import styled from 'styled-components';

const PageLayout = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};

const PageContainer = styled.div`
  width: 100vw;
  /* 이거 잠시 변경 */
  height: 100%;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  background-color: ${({ theme }) => theme.colors.PAGE_BG};
`;
export default PageLayout;
