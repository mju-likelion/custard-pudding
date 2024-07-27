import styled, { keyframes } from 'styled-components';

interface WaveAnimationProps {
  position: number;
}

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
`;

const Box = styled.div<{ $position: number }>`
  position: relative;

  top: ${({ $position }) => `calc(${$position}%)`};

  @media ${({ theme }) => theme.size.mobile} {
    top: ${({ $position }) => `calc(${$position}%)`};
  }
  @media ${({ theme }) => theme.size.tablet} {
    top: ${({ $position }) => `calc(${$position}%)`};
  }
  @media ${({ theme }) => theme.size.desktop} {
    top: ${({ $position }) => `calc(${$position}%)`};
  }
`;

const Wave = styled.div<{ $position: number }>`
  position: absolute;
  opacity: 0.4;
  border-radius: 45%;

  width: 70px;
  height: 60px;

  @media ${({ theme }) => theme.size.tablet} {
    width: 80px;
    height: 60px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    width: 120px;
    height: 90px;
  }

  &.one {
    animation: ${rotate} 8000ms infinite linear;
    opacity: 0.9;
    background: #ff7494;
  }
  &.two {
    animation: ${rotate} 4500ms infinite linear;
    opacity: 0.9;
    background: #ffabbe;
  }
`;

const WaveAnimation = ({ position }: WaveAnimationProps) => {
  return (
    <Box $position={position}>
      <Wave className="one" $position={position} />
      <Wave className="two" $position={position} />
    </Box>
  );
};

export default WaveAnimation;
