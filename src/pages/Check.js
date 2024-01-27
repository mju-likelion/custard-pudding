import styled from 'styled-components';
import CardLanyard from '../components/CardLanyard/CardLanyard';
import SubTitle from '../components/checkPage/SubTitle';
import Input from '../components/checkPage/Input';
import SmallButton from '../components/checkPage/SmallButton';

const Check = () => {
  return (
    <Container>
      <CardLanyard width={'544px'} height={'358px'}>
        <ContentsWrapper>
          <SubTitle>지원 확인하기</SubTitle>
          <Input />
        </ContentsWrapper>
        <ButtonWrapper>
          <SmallButton>확인하기</SmallButton>
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
  margin-top: 278px;
  margin-bottom: 24px;
`;

export default Check;
