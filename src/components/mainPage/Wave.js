import styled, { keyframes } from 'styled-components';

const WaveAnimation = ({ position }) => {
  return (
    <Box $position={position}>
      <Wave className="one" $position={position} />
      <Wave className="two" $position={position} />
    </Box>
  );
};

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Box = styled.div`
  position: relative;

  top: ${({ $position }) => `calc(${$position}% - 120px)`};
  @media ${({ theme }) => theme.devices.MOBILE} {
    top: ${({ $position }) => `calc(${$position}% - 150px)`};
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    top: ${({ $position }) => `calc(${$position}% - 250px)`};
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    top: ${({ $position }) => `calc(${$position}% - 330px)`};
  }
`;

const Wave = styled.div`
  position: absolute;
  opacity: 0.4;
  border-radius: 43%;

  width: 150px;
  height: 120px;
  @media ${({ theme }) => theme.devices.MOBILE} {
    width: 150px;
    height: 130px;
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 300px;
    height: 200px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 400px;
    height: 300px;
  }

  &.one {
    animation: ${rotate} 10000ms infinite linear;
    opacity: 0.9;
    background: #ff7494;
  }
  &.two {
    animation: ${rotate} 8000ms infinite linear;
    opacity: 0.9;
    background: #ffabbe;
  }
`;

export default WaveAnimation;
