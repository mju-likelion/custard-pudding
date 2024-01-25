import styled from 'styled-components';
import PartCard from '../components/mainPage/PartCard';
import letter from '../assets/letter.svg';
import react_icon from '../assets/react_icon.svg';
import spring_boot_icon from '../assets/spring_boot_icon.svg';

const Main = () => {
  return (
    <PageWrapper>
      <LetterImg src={letter} />
      <PartContainer>
        <Title>파트</Title>
        <Cards>
          <PartCard
            part="Web"
            icon={react_icon}
            content={
              '실제 서비스에 사용되는 API 서버를 설계하고, NestJS를 통해 실제 작동하는 서버로 구현/배포해요.'
            }
            techList={'git, Github, JavaScript, Netlify, React'}
          />
          <PartCard
            part="Server"
            icon={spring_boot_icon}
            content={
              '실제 서비스에 사용되는 API 서버를 설계하고, NestJS를 통해 실제 작동하는 서버로 구현/배포해요.'
            }
            techList={
              'git, Github, Spring Boot, JPA, Spring Security, JAVA, nginx, EC2, MySQL'
            }
          />
        </Cards>
      </PartContainer>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 300px;
  @media ${({ theme }) => theme.devices.MOBILE} {
    width: 390px;
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 600px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
  }
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    gap: 200px;
  }
`;
const PartContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  @media ${({ theme }) => theme.devices.MOBILE} {
    padding: 0 30px;
  }
`;
const Title = styled.p`
  display: inline-block;
  margin-bottom: 60px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.WHITE_TXT};
  ${({ theme }) => theme.typographies.SUB_TITLE}
  @media ${({ theme }) => theme.devices.TABLET} {
    ${({ theme }) => theme.typographies.TITLE}
  }
`;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 60px;
  margin: 0 5px;
  @media ${({ theme }) => theme.devices.MOBILE} {
    margin: 0 30px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 0 60px;
    flex-direction: row;
  }
`;
const LetterImg = styled.img`
  width: 300px;
  @media ${({ theme }) => theme.devices.MOBILE} {
    width: 340px;
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 450px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 860px;
  }
`;

export default Main;
