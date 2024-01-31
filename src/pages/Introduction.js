import styled from 'styled-components';
import UserInfoInput from '../components/UserInfoInput';

const Introduction = () => {
  return (
    <>
      <Header></Header>
      <AllContainer>
        <InfoContainer>
          <InfoTitle>지원자 정보</InfoTitle>
          <InfoInputBox>
            <InnerInputBox>
              <UserInfoInput subTitle="이름" />
              <UserInfoInput subTitle="학과" />
              <UserInfoInput subTitle="학번" />
              <UserInfoInput subTitle="학년" />
            </InnerInputBox>
            <InnerInputBox>
              <UserInfoInput subTitle="이메일" />
              <UserInfoInput subTitle="전화번호" />
              <UserInfoInput subTitle="지원 아이디" />
            </InnerInputBox>
          </InfoInputBox>
          <InfoHelperText>※ 형식에 맞지 않는 값이 있습니다</InfoHelperText>
        </InfoContainer>
      </AllContainer>
    </>
  );
};
const Header = styled.div`
  position: sticky;
  width: 100%;
  height: 56px;
  background-color: green;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 70px;
    background-color: blue;
  }
`;
const AllContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 100px; */
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 175px 0 200px 0;
  }
`;
const InfoTitle = styled.div`
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
  justify-content: space-between;
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
    padding: 68px 75px;
    width: 972px;
    height: 388px;
  }
`;
const InnerInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
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

export default Introduction;
