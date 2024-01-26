import styled from 'styled-components';

const SubTitle = ({ children }) => {
  return (
    <>
      <TitleBox>{children}</TitleBox>
    </>
  );
};

const TitleBox = styled.div`
  ${({ theme }) => theme.typographies.TITLE};
  text-decoration: underline;
  text-underline-offset: 12px;
  text-decoration-thickness: 2px;
  position: absolute;
  top: 85px;
`;

export default SubTitle;
