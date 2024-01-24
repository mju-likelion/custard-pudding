import styled from 'styled-components';
import letter from '../assets/letter.svg';

const Main = () => {
  return (
    <PageWrapper>
      <LetterImg src={letter} />
      <button>글씨</button>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
  }
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LetterImg = styled.img`
  width: 350px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 860px;
  }
`;

export default Main;
