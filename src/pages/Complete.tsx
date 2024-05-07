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
  @media ${({ theme }) => theme.devices.TABLET} {
    height: calc(100vh - 70px - 100px - 230px);
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
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
    color: ${({ theme }) => theme.colors.MAIN_PINK};
  }
  ${({ theme }) => theme.typographies.SUB_TITLE};
  @media ${({ theme }) => theme.devices.TABLET} {
    ${({ theme }) => theme.typographies.TITLE};
  }
`;
const Small = styled.p`
  color: ${({ theme }) => theme.colors.DISABLE_BTN};
  ${({ theme }) => theme.typographies.DEFAULT_TXT};
  @media ${({ theme }) => theme.devices.TABLET} {
    ${({ theme }) => theme.typographies.SUB_TITLE};
  }
`;
export default Complete;
