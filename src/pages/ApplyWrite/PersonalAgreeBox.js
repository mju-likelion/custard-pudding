import styled from 'styled-components';
import { DATA } from './test';
const PersonalAgreeBox = ({ text, sequence }) => {
  return (
    <Container>
      <TitleBox>
        <Title>개인정보 동의</Title>
        <CheckWrapper>
          <CheckLabel>[동의]</CheckLabel>
          <CheckBox />
        </CheckWrapper>
      </TitleBox>
      <AgreeContentBox>
        <AgreeContent>{DATA}</AgreeContent>
      </AgreeContentBox>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 326px;
  height: 190px; */
  margin-bottom: 30px;
  gap: 6px;
  @media ${({ theme }) => theme.devices.TABLET} {
    /* width: 562px;
    height: 294px; */
    margin-bottom: 50px;
    gap: 10px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    /* width: 972px;
    height: 358px; */
    margin-bottom: 100px;
  }
`;
const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  @media ${({ theme }) => theme.devices.TABLET} {
    padding: 0 12px;
  }
`;
const Title = styled.div`
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  font-size: 12px;
  font-weight: 500;

  @media ${({ theme }) => theme.devices.TABLET} {
    ${({ theme }) => theme.typographies.DEFAULT_TXT}
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    ${({ theme }) => theme.typographies.BIG_TXT}
  }
`;
const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  @media ${({ theme }) => theme.devices.TABLET} {
    gap: 8px;
  }
`;
const CheckLabel = styled.div`
  color: ${({ theme }) => theme.colors.MAIN_PINK};
  font-size: 12px;
  font-weight: 500;

  @media ${({ theme }) => theme.devices.TABLET} {
    ${({ theme }) => theme.typographies.DEFAULT_TXT}
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    ${({ theme }) => theme.typographies.BIG_TXT}
  }
`;
const CheckBox = styled.img`
  width: 20px;
  height: 20px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 28px;
    height: 28px;
  }
`;
const AgreeContentBox = styled.div`
  /* width: 100%;
  height: 100%; */
  width: 326px;
  height: 156px;
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  border-radius: 15px;
  padding: 20px 14px 20px 24px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 562px;
    height: 250px;
    padding: 32px 30px 32px 40px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 972px;
    height: 320px;
    padding: 40px 40px 40px 60px;
  }
`;
const AgreeContent = styled.div`
  width: 100%;
  height: 100%;
  font-size: 10px;
  font-weight: 500;
  color: #b6b6b6;
  line-height: 20px;

  white-space: pre-line;
  overflow-y: scroll;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.MODAL_BG}; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
    height: 50%;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.CARD_BG};
  }

  @media ${({ theme }) => theme.devices.TABLET} {
    line-height: 30px;
    font-size: 14px;
    &::-webkit-scrollbar {
      width: 8px;
    }
    padding-right: 6px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    line-height: 40px;
    ${({ theme }) => theme.typographies.DEFAULT_TXT}
    padding-right: 20px;
  }
`;

export default PersonalAgreeBox;
