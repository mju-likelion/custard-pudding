import styled from 'styled-components';

const Introduction = () => {
  return (
    <>
      <Header></Header>
      <AllContainer>
        <InfoContainer>
          <InfoTitle>지원자 정보</InfoTitle>
          <InfoInputBox />
          <InfoHelperText>※ 형식에 맞지 않는 값이 있습니다</InfoHelperText>
        </InfoContainer>
      </AllContainer>
    </>
  );
};
const Header = styled.div`
  position: sticky;
  width: 100vw;
  height: 56px;
  background-color: green;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 70px;
    background-color: blue;
  }
`;
const AllContainer = styled.div`
  width: 100%;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid blue;
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
  border: 1px solid #939393;
  border-radius: 15px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    padding: 68px 75px;
    width: 972px;
    height: 388px;
  }
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
