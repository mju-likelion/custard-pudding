import styled from 'styled-components';
import UserInfoInput from '../components/writePage/UserInfoInput';
import { INPUT_LABEL_LIST } from '../components/writePage/InputLabelList';
import ApplyAnswer from '../components/writePage/ApplyAnswer';

const Introduction = () => {
  return (
    <>
      <Header />
      <AllContainer>
        <InfoContainer>
          <Title>지원자 정보</Title>
          <InfoInputBox>
            <InnerInputBox>
              {INPUT_LABEL_LIST.left.map((item) => (
                <UserInfoInput key={item.id} subTitle={item.label} />
              ))}
            </InnerInputBox>
            <HorizontalLine />
            <InnerInputBox>
              {INPUT_LABEL_LIST.right.map((item) => (
                <UserInfoInput key={item.id} subTitle={item.label} />
              ))}
            </InnerInputBox>
          </InfoInputBox>
          <InfoHelperText>※ 형식에 맞지 않는 값이 있습니다</InfoHelperText>
        </InfoContainer>
        <IntroduceContainer>
          <Title>자기소개서</Title>
          <Question>1. 이렇게 저렇게 하려는데 어떻게 할거냐?</Question>
          <ApplyAnswer></ApplyAnswer>
          <Question>2. 이렇게 저렇게 하려는데 어떻게 할거냐?</Question>
          <ApplyAnswer></ApplyAnswer>
          <Question>3. 이렇게 저렇게 하려는데 어떻게 할거냐?</Question>
          <ApplyAnswer></ApplyAnswer>
          <Question>4. 이렇게 저렇게 하려는데 어떻게 할거냐?</Question>
          <ApplyAnswer></ApplyAnswer>
        </IntroduceContainer>
      </AllContainer>
    </>
  );
};
const Header = styled.div`
  position: sticky;
  width: 100%;
  height: 56px;
  background-color: green;
  @media ${({ theme }) => theme.devices.TABLET} {
    background-color: blue;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 70px;
    background-color: red;
  }
`;
const AllContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 지원자 정보 영역 시작
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 100px; */
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 175px 0 200px 0;
  }
`;
const Title = styled.div`
  align-self: flex-start;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.MAIN_PINK};
  font-size: 32px;
  font-weight: 700;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-bottom: 50px;
  }
`;
const InfoInputBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #939393;
  border-radius: 15px;
  padding: 33px 38px 34px 38px;
  width: 330px;
  height: 405px;
  @media ${({ theme }) => theme.devices.TABLET} {
    padding: 65px 105px;
    width: 560px;
    height: 726px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 68px 75px;
    width: 972px;
    height: 388px;
  }
`;
const InnerInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media ${({ theme }) => theme.devices.TABLET} {
    gap: 28px;
  }
`;
const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #282828;
  margin: auto 0;
`;

const InfoHelperText = styled.div`
  /* 모바일꺼 해야됨 */

  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 20px;
    font-weight: 300;
    color: #ff5172;
    margin-top: 28px;
  }
`;

// 자기소개서 영역 시작
const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 모바일 margin 정해야됨 */
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-bottom: 200px;
  }
`;
const Question = styled.p`
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

export default Introduction;
