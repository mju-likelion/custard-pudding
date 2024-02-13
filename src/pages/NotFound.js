import styled from 'styled-components';
import LION from '../assets/imgs/Lion.svg';
import TAIL from '../assets/imgs/tail.svg';

const NotFound = () => {
  return (
    <PageContainer>
      <SignBoard>
        <Text>404</Text>
      </SignBoard>
      <Tail src={TAIL} />
      <Lion src={LION} />
    </PageContainer>
  );
};
const PageContainer = styled.div`
  height: calc(100vh - 56px - 100px - 40px);
  position: relative;
  @media ${({ theme }) => theme.devices.TABLET} {
    height: calc(100vh - 70px - 100px - 80px);
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: calc(100vh - 70px - 100px -100px);
  }
`;
const SignBoard = styled.div`
  width: 200px;
  height: 150px;
  margin: 40px auto 0;
  padding-top: 40px;
  border-radius: 25px;
  background-color: white;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 330px;
    height: 180px;
    margin: 80px auto 0;
    padding-top: 40px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 480px;
    height: 300px;
    margin: 100px auto 0;
    padding-top: 70px;
  }
`;
const Text = styled.p`
  color: ${({ theme }) => theme.colors.MAIN_PINK};
  text-align: center;
  font-size: 80px;
  font-weight: 700;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 100px;
    font-weight: 700;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 160px;
    font-weight: 700;
  }
`;
const Tail = styled.img`
  display: block;
  width: 100px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 143px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 165px;
  }
  margin: -20px 40% 0 auto;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: -20px 40% 0 auto;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: -20px 40% 0 auto;
  }
`;
const Lion = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 230px;
  height: 160px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 330px;
    height: 260px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 500px;
    height: 400px;
  }
`;

export default NotFound;
