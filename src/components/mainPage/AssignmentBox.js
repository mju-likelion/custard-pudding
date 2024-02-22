import styled from 'styled-components';

const AssignmentBox = ({ part_name, assignment }) => {
  return (
    <Box>
      <PartName>{part_name}</PartName>
      <Line />
      <Content>{assignment}</Content>
    </Box>
  );
};

const Box = styled.div`
  width: 280px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 100%;
    padding: 30px;
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  border-radius: 30px;
`;
const PartName = styled.div`
  padding: 15px 20px;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 700;
  @media ${({ theme }) => theme.devices.TABLET} {
    padding: 20px;
    border-radius: 50px;
    ${({ theme }) => theme.typographies.SUB_TITLE};
  }
  text-align: center;
  background-color: ${({ theme }) => theme.colors.MODAL_BG};
`;
const Line = styled.div`
  display: none;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: block;
    width: 1px;
    height: 180px;
    background-color: ${({ theme }) => theme.colors.WHITE_TXT};
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: block;
    width: 1px;
    height: 46px;
    background-color: ${({ theme }) => theme.colors.WHITE_TXT};
  }
`;
const Content = styled.p`
  ${({ theme }) => theme.typographies.M_DEFAULT_TXT}
  line-height: 30px;
  @media ${({ theme }) => theme.devices.TABLET} {
    ${({ theme }) => theme.typographies.DEFAULT_TXT}
    line-height: 40px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    ${({ theme }) => theme.typographies.BIG_TXT}
  }
`;

export default AssignmentBox;
