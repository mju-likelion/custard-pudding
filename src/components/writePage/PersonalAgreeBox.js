import styled from 'styled-components';
import agreeIcon from '../../assets/imgs/agree_icon.svg';

const PersonalAgreeBox = ({ text, sequence, register }) => {
  return (
    <Container>
      <TitleBox>
        <Title>{sequence === 2 ? '참고 및 주의사항' : '개인정보 동의'}</Title>
        <CheckWrapper>
          <CheckLabel htmlFor={'agree' + String(sequence)}>[동의]</CheckLabel>
          <CheckBox
            {...register('agree' + String(sequence))}
            type="checkbox"
            id={'agree' + String(sequence)}
          />
        </CheckWrapper>
      </TitleBox>
      <AgreeContentBox>
        <AgreeContent $isRefer={sequence === 2 ? true : false}>
          {text}
        </AgreeContent>
      </AgreeContentBox>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 6px;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-bottom: 40px;
    gap: 10px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin-bottom: 50px;
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
const CheckLabel = styled.label`
  user-select: none;
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
const CheckBox = styled.input`
  appearance: none;
  border: 1px solid ${({ theme }) => theme.colors.MODAL_BG};
  border-radius: 3px;
  width: 20px;
  height: 20px;
  &:checked {
    background-image: url(${agreeIcon});
    background-color: ${({ theme }) => theme.colors.MAIN_PINK};
    background-position: 50%;

    opacity: 0.6;
    padding: 2px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 28px;
    height: 28px;
  }
`;
const AgreeContentBox = styled.div`
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
  line-height: 20px;
  color: ${({ theme, $isRefer }) =>
    $isRefer ? theme.colors.HOVER_BTN : '#b6b6b6'};
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
