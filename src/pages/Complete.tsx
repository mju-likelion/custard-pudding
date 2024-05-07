import styled from 'styled-components';
import Confetti from '../Confetti';

const Complete = () => {
  return (
    <PageContainer>
      <Confetti />
      <Content>
        <Title>
          지원이 <span>완료</span>되었습니다.
        </Title>
        <Small>감사합니다.</Small>
      </Content>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  height: calc(100vh - 56px - 100px - 230px);
  @media ${({ theme }) => theme.size.tablet} {
    height: calc(100vh - 70px - 100px - 230px);
  }
  @media ${({ theme }) => theme.size.desktop} {
    height: calc(100vh - 70px - 100px - 230px);
  }
`;
const Content = styled.p`
  margin-top: 230px;
  text-align: center;
`;
const Title = styled.p`
  margin-bottom: 30px;
  & > span {
    color: ${({ theme }) => theme.colors.pink100};
  }
  ${({ theme }) => theme.typographies.subtitle};
  @media ${({ theme }) => theme.size.tablet} {
    ${({ theme }) => theme.typographies.title};
  }
`;
const Small = styled.p`
  color: ${({ theme }) => theme.colors.background100};
  ${({ theme }) => theme.typographies.DEFAULT_TXT};
  @media ${({ theme }) => theme.size.tablet} {
    ${({ theme }) => theme.typographies.subtitle};
  }
`;
export default Complete;
