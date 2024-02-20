import styled from 'styled-components';

const SubTitle = ({ children }) => {
  return (
    <>
      <TitleBox>{children}</TitleBox>
    </>
  );
};

const TitleBox = styled.div`
  ${({ theme }) => theme.typographies.DEFAULT_TXT};
  border-bottom: 1px solid;
  padding-bottom: 2px;

  @media ${({ theme }) => theme.devices.DESKTOP} {
    ${({ theme }) => theme.typographies.TITLE}
    border-bottom: 2px solid;
    padding-bottom: 4px;
  }
`;

export default SubTitle;
