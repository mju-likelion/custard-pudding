import styled from 'styled-components';
import CardLanyard from '../components/CardLanyard/CardLanyard';
import SubTitle from '../components/checkPage/SubTitle';
import Input from '../components/checkPage/Input';
import SmallButton from '../components/checkPage/SmallButton';

const DEFAULT_MESSAGE =
  '※. 지원 여부는 지원 아이디를 통해 확인 가능하며, 수정할 수 없습니다.';

const ERROR_MESSAGE = '올바른 아이디 형식이 아닙니다.';

const Apply = () => {
  return (
    <Container>
      <CardLanyard
        width={'250px'}
        height={'318px'}
        pcWidth={'544px'}
        pcHeight={'358px'}
      >
        <ContentsWrapper>
          <SubTitle>지원하기</SubTitle>
          <Input
            isError={true}
            defaultMessage={DEFAULT_MESSAGE}
            errorMessage={ERROR_MESSAGE}
          />
          <Button>지원하기</Button>
        </ContentsWrapper>
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
`;
const Button = styled(SmallButton)`
  margin-top: 28px;
`;

export default Apply;
