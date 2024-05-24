import styled from 'styled-components';
import React from 'react';

interface SubTitleProps {
  children: React.ReactNode;
}

const SubTitle = (props: SubTitleProps) => {
  return (
    <>
      <TitleBox>{props.children}</TitleBox>
    </>
  );
};

const TitleBox = styled.div`
  ${({ theme }) => theme.typographies.defaultTxt};
  border-bottom: 1px solid;
  padding-bottom: 2px;

  @media ${({ theme }) => theme.size.desktop} {
    ${({ theme }) => theme.typographies.title}
    border-bottom: 2px solid;
    padding-bottom: 4px;
  }
`;

export default SubTitle;
