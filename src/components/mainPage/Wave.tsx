import styled, { keyframes } from 'styled-components';

interface WaveAnimationProps {
  position: number;
}

const WaveAnimation = ({ position }: WaveAnimationProps) => {
  return (
    <Box $position={position}>
      <Wave className="one" $position={position} />
      <Wave className="two" $position={position} />
    </Box>
  );
};

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
`;

const Box = styled.div`
  position: relative;

  top: ${({ $position }) => `calc(${$position}%)`};

  @media ${({ theme }) => theme.devices.MOBILE} {
    top: ${({ $position }) => `calc(${$position}%)`};
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    top: ${({ $position }) => `calc(${$position}%)`};
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    top: ${({ $position }) => `calc(${$position}%)`};
  }
`;

const Wave = styled.div`
  position: absolute;
  opacity: 0.4;
  border-radius: 45%;

  width: 70px;
  height: 60px;

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 80px;
    height: 60px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
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

export default WaveAnimation;
