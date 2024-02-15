import styled from 'styled-components';
import { DATA } from './test';
const PersonalAgreeBox = () => {
  return (
    <Container>
      <TitleBox>
        <Title>개인정보 동의</Title>
        <CheckBox>
          <CheckLabel>[동의]</CheckLabel>
          <Check />
        </CheckBox>
      </TitleBox>
      <AgreeContentBox>
        <AgreeContent>{DATA}</AgreeContent>
      </AgreeContentBox>
    </Container>
  );
};
const Container = styled.div`
  width: 972px;
  height: 354px;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;
const TitleBox = styled.div`
  width: 100%;
  padding: 0 12px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  ${({ theme }) => theme.typographies.BIG_TXT}
  color: ${({ theme }) => theme.colors.WHITE_TXT};
`;
const CheckBox = styled.div`
  display: flex;
  align-items: center;
`;
const CheckLabel = styled.div`
  ${({ theme }) => theme.typographies.BIG_TXT}
  color: ${({ theme }) => theme.colors.MAIN_PINK};
`;
const Check = styled.img``;
const AgreeContentBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 40px 40px 60px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.CARD_BG};
`;
const AgreeContent = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 20px;
  color: #b6b6b6;
  line-height: 40px;
  white-space: pre-line;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.MODAL_BG}; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
    height: 50%;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.CARD_BG};
  }
`;

export default PersonalAgreeBox;
