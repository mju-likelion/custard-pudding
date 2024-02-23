import styled from 'styled-components';
import { useState, useEffect } from 'react';
import WaveAnimation from './Wave';

const ScrollBar = () => {
  const [position, setPosition] = useState(0);

  function onScroll() {
    // 현재 스크롤 위치
    const scrolled = window.scrollY;

    // 스크롤 가능 높이 = 전체 문서 높이 - 뷰포트 높이
    const maxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // 현재 위치 백분율로 표시
    const scrollPosition = (scrolled / maxHeight) * 100;
    setPosition(scrollPosition);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Wrapper>
      <WaveAnimation position={position} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 999;
  width: 20px;
  // 화면 높이 - Footer 높이 - 원 높이
  height: calc(100vh - 100px - 60px);
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 30px;
    height: calc(100vh - 100px - 70px);
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 50px;
    height: calc(100vh - 100px - 110px);
  }
  position: fixed;
  top: 0;
  right: 0;
  text-align: center;
`;
export default ScrollBar;
