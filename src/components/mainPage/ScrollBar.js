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
  width: 25px;
  height: calc(100vh - 56px - 100px);
  @media ${({ theme }) => theme.devices.MOBILE} {
    width: 40px;
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 70px;
    height: calc(100vh - 70px - 100px);
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 100px;
    height: calc(100vh - 70px - 100px);
  }
  position: fixed;
  right: 0;
  text-align: center;
`;
export default ScrollBar;
