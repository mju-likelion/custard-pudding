import styled from 'styled-components';
import errorLionImg from '../../assets/imgs/error_lion.svg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ErrorInfo from '../../components/NotFound/ErrorInfo';
import ErrorInfoTablet from '../../components/NotFound/ErrorInfoTablet';
import ErrorInfoMobile from '../../components/NotFound/ErrorInfoMobile';

const PageContainer = styled.div`
  height: calc(100vh - 56px - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.devices.TABLET} {
    height: calc(100vh - 70px - 100px);
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: calc(100vh - 70px - 100px);
  }
`;
const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 300px;
  @media ${({ theme }) => theme.devices.TABLET} {
    flex-direction: row;
    gap: 20px;
    width: 500px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    gap: 20px;
    width: 760px;
  }
`;
const ErrorImg = styled.img`
  /* 이미지 드래그 방지 */
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  width: 100px;
  height: auto;
  margin-bottom: 20px;
  @media ${({ theme }) => theme.size.tablet} {
    width: 180px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    width: 260px;
  }
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({ theme }) => theme.size.tablet} {
    align-items: flex-start;
  }
`;
const Title = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 35px;
  color: ${({ theme }) => theme.colors.pink100};
  @media ${({ theme }) => theme.size.tablet} {
    font-size: 30px;
    margin-bottom: 30px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    font-size: 50px;
    margin-bottom: 40px;
  }
`;
const Subtitle = styled.p`
  font-size: 17px;
  margin-bottom: 15px;
  @media ${({ theme }) => theme.size.tablet} {
    font-size: 18px;
    margin-bottom: 15px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

const MainButton = styled.button`
  width: 120px;
  height: 50px;
  background-color: #282828;
  border-radius: 30px;
  font-size: 14px;
  color: #939393;
  &:hover {
    background-color: #3d3d3d;
  }
  @media ${({ theme }) => theme.size.tablet} {
    width: 130px;
    height: 50px;
    border-radius: 30px;
    font-size: 14px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    width: 150px;
    height: 60px;
    font-size: 18px;
  }
`;

const NotFound = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const DESKTOP_WIDTH: number = 1199;
  const TABLET_WIDTH: number = 599;

  const navigate = useNavigate();

  const changeWidth = () => {
    if (innerWidth > DESKTOP_WIDTH) {
      return <ErrorInfo />;
    } else if (innerWidth > TABLET_WIDTH) {
      return <ErrorInfoTablet />;
    } else {
      return <ErrorInfoMobile />;
    }
  };

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  });

  return (
    <PageContainer>
      <ErrorContainer>
        <ErrorImg src={errorLionImg}></ErrorImg>
        <DetailContainer>
          <Title>&apos;404&apos; 에러</Title>
          <Subtitle>현재 페이지를 찾을 수 없습니다.</Subtitle>
          {changeWidth()}

          <MainButton onClick={() => navigate('/')}>메인으로</MainButton>
        </DetailContainer>
      </ErrorContainer>
    </PageContainer>
  );
};

export default NotFound;
