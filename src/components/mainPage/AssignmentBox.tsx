import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface AssignmentBoxProps {
  part_name: string;
  assignment: string;
}

const Box = styled.div`
  width: 280px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  @media ${({ theme }) => theme.size.tablet} {
    width: 100%;
    padding: 30px;
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }
  background-color: ${({ theme }) => theme.colors.background300};
  border-radius: 30px;
`;
const PartName = styled.div`
  padding: 15px 20px;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 700;
  @media ${({ theme }) => theme.size.tablet} {
    padding: 20px;
    border-radius: 50px;
    ${({ theme }) => theme.typographies.subtitle};
  }
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background200};
`;
const Line = styled.div`
  display: none;
  @media ${({ theme }) => theme.size.tablet} {
    display: block;
    width: 1px;
    height: 180px;
    background-color: ${({ theme }) => theme.colors.white};
  }
  @media ${({ theme }) => theme.size.desktop} {
    display: block;
    width: 1px;
    height: 46px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
const Content = styled.p`
  ${({ theme }) => theme.typographies.mDefault}
  line-height: 30px;
  @media ${({ theme }) => theme.size.tablet} {
    ${({ theme }) => theme.typographies.defaultTxt}
    line-height: 40px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    ${({ theme }) => theme.typographies.bigTxt}
  }
`;

const AssignmentBox = ({
  part_name,
  assignment,
}: PropsWithChildren<AssignmentBoxProps>) => {
  return (
    <Box>
      <PartName>{part_name}</PartName>
      <Line />
      <Content>{assignment}</Content>
    </Box>
  );
};

export default AssignmentBox;
