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
              <ApplyPartBox>
                <PartLabel>지원 파트</PartLabel>
                <PartBtnBox>
                  <PartBtn>웹</PartBtn>
                  <PartBtn>서버</PartBtn>
                </PartBtnBox>
              </ApplyPartBox>
            </InnerInputBox>
          </InfoInputBox>
          <InfoHelperText>※ 형식에 맞지 않는 값이 있습니다</InfoHelperText>
        </InfoContainer>
        <IntroduceContainer>
          <Title>자기소개서</Title>
          {/* data 따로 관리하는 파일에서 get 요청 후 렌더링 + map 활용 */}
          <Question>1. 이렇게 저렇게 하려는데 어떻게?</Question>
          <ApplyAnswer></ApplyAnswer>
          <Question>2. 이렇게 저렇게 하려는데 어떻게?</Question>
          <ApplyAnswer></ApplyAnswer>
          <Question>3. 이렇게 저렇게 하려는데 어떻게?</Question>
          <ApplyAnswer></ApplyAnswer>
          <Question>4. 이렇게 저렇게 하려는데 어떻게?</Question>
          <ApplyAnswer></ApplyAnswer>
          <Question>5. 이렇게 저렇게 하려는데 어떻게?</Question>
          <ApplyAnswer></ApplyAnswer>
        </IntroduceContainer>
        <HomeworkContainer>
          <Title>지원 과제</Title>
          <Question>자기소개 페이지를 첨부해주세요 (웹파트)</Question>
          <HomeworkInputBox>
            <HomeworkInput></HomeworkInput>
            <FileButton>파일 선택</FileButton>
          </HomeworkInputBox>
          <HomeworkHelperText>
            뭐시기 저시기 이런거 말할거에요
          </HomeworkHelperText>
        </HomeworkContainer>
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
  margin: 100px 0;
  /* 마진 아래 다시 정해야됨 */
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
    padding: 68px 85px;
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

const ApplyPartBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media ${({ theme }) => theme.devices.TABLET} {
    gap: 17px;
  }
`;
const PartLabel = styled.p`
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.WHITE_TXT};

  @media ${({ theme }) => theme.devices.TABLET} {
    ${({ theme }) => theme.typographies.BIG_TXT}
  }
`;
const PartBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* gap: 18px; */
`;

const PartBtn = styled.button`
  width: 92px;
  height: 26px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  background-color: #2b2b2b;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 116px;
    height: 42px;
    font-size: 14px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 130px;
    ${({ theme }) => theme.typographies.DEFAULT_TXT}
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
  margin-top: 15px;
  font-size: 12px;
  font-weight: 300;
  color: #ff5172;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 28px;
    font-size: 20px;
  }
`;

// 자기소개서 영역 시작
const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 모바일 margin 정해야됨 */
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-bottom: 90px;
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

const HomeworkContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  width: 330px;
  height: 690px;

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 560px;
    height: 1067px;
  }

  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 972px;
    height: 882px;
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
  background-color: #2b2b2b;
  border-radius: 8px;
  border: none;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 440px;
    height: 56px;
  }
  /* margin: 100px; */
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
  color: #c8c8c8;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 10px;
    font-size: 14px;
  }
`;
export default Introduction;
