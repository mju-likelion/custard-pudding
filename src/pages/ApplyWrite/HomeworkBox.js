import styled from 'styled-components';
import { HOMEWORK_DATA } from './HomeworkData';

const HomeworkBox = ({ selectedPart }) => {
  return (
    <>
      <Title>{HOMEWORK_DATA[selectedPart].title}</Title>
      <HomeworkInputBox>
        <HomeworkInput />
        {selectedPart === 'web' && <FileButton>파일 선택</FileButton>}
      </HomeworkInputBox>
      <HomeworkHelperText>
        {HOMEWORK_DATA[selectedPart].helperText}
      </HomeworkHelperText>
    </>
  );
};

const Title = styled.p`
  align-self: flex-start;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  font-size: 12px;
  font-weight: 500;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin-bottom: 25px;
    ${({ theme }) => theme.typographies.DEFAULT_TXT}
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    ${({ theme }) => theme.typographies.BIG_TXT}
  }
`;

const HomeworkInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media ${({ theme }) => theme.devices.TABLET} {
    gap: 25px;
  }
`;
const HomeworkInput = styled.input`
  width: 240px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  border-radius: 8px;
  border: none;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 440px;
    height: 56px;
  }
`;
const FileButton = styled.button`
  width: 70px;
  height: 24px;
  font-size: 10px;
  font-weight: 300;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.WHITE_TXT};
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 16px;
    width: 110px;
    height: 36px;
  }
`;

const HomeworkHelperText = styled.p`
  margin-top: 5px;
  font-size: 10px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.DISABLE_BTN};
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 10px;
    font-size: 14px;
  }
`;
export default HomeworkBox;
