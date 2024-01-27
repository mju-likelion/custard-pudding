import styled from 'styled-components';
import CardLanyard from '../components/CardLanyard/CardLanyard';
import SubTitle from '../components/checkPage/SubTitle';
import Input from '../components/checkPage/Input';
import SmallButton from '../components/checkPage/SmallButton';

const Apply = () => {
  return (
    <Container>
      <CardLanyard width={'544px'} height={'358px'}>
        <InputWithCaption>
          <ContentsWrapper>
            <SubTitle>지원하기</SubTitle>
            <Input />
          </ContentsWrapper>
          <StyledP>
            ※. 지원 여부는 지원 아이디를 통해 확인 가능하며, 수정할 수 없습니다.
          </StyledP>
        </InputWithCaption>
        <ButtonWrapper>
          <SmallButton>지원하기</SmallButton>
        </ButtonWrapper>
      </CardLanyard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const InputWithCaption = styled.div``;

const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  margin-top: 28px;
`;

const StyledP = styled.p`
  color: ${({ theme }) => theme.colors.HOVER_BTN};
  ${({ theme }) => theme.typographies.SMALL_TXT};
  display: flex;
  justify-content: center;
  margin-top: 236px;
`;
export default Apply;
