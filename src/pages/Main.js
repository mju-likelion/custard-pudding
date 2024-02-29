import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PartCard from '../components/mainPage/PartCard';
import AssignmentBox from '../components/mainPage/AssignmentBox';
import BigButton from '../components/mainPage/BigButton';
import OpenChat from '../components/mainPage/OpenChat';
import ScrollBar from '../components/mainPage/ScrollBar';
import part_message from '../messages/part';
const LETTER_URL =
  'https://likelion12th-apply-pages.s3.ap-northeast-2.amazonaws.com/svgs/letter.svg';

const Main = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <PageWrapper>
        <LetterImg src={LETTER_URL} />
        <PartContainer>
          <Title>파트</Title>
          <PartCards>
            {Object.entries(part_message).map(([key, value]) => (
              <PartCard
                key={key}
                part_name={value.part_name}
                icon={value.icon}
                content={value.content}
                tech_list={value.tech_list}
              />
            ))}
          </PartCards>
        </PartContainer>
        <AssignmentContainer>
          <Title>지원 과제</Title>
          <AssignmentBoxes>
            {Object.entries(part_message).map(([key, value]) => (
              <AssignmentBox
                key={key}
                part_name={value.part_name}
                assignment={value.assignment}
              />
            ))}
            <AdditionalInfoLink>
              ※ 지원 과제에 대한 추가적인 설명은 &nbsp;
              <Link
                href="https://material-handle-e32.notion.site/2a29850ebb4442b19b091d7a708dcc4e?pvs=4"
                target="_blank"
              >
                Notion
              </Link>
              &nbsp;을 반드시 참고 바랍니다.
            </AdditionalInfoLink>
          </AssignmentBoxes>
          <AdditionalInfo>
            ※ 지원 접수 마감일에는 지원자가 몰려 지원이 어려울 수 있으니,
            가능하시다면 미리 제출해 주시기 바랍니다.
          </AdditionalInfo>
        </AssignmentContainer>
        <BigButton onClick={() => navigate('/apply')}>지원하기</BigButton>
      </PageWrapper>
      <OpenChat />
      <ScrollBar />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const PageWrapper = styled.div`
  width: 300px;
  @media ${({ theme }) => theme.devices.MOBILE} {
    width: 390px;
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 600px;
  }
  margin: 0 auto;
  padding: 20px 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 1200px;
    gap: 200px;
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
const PartContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  @media ${({ theme }) => theme.devices.MOBILE} {
    padding: 0 30px;
  }
  white-space: pre-line;
  word-break: keep-all;
`;
const Title = styled.p`
  display: inline-block;
  margin-bottom: 50px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.WHITE_TXT};
  ${({ theme }) => theme.typographies.SUB_TITLE}
  @media ${({ theme }) => theme.devices.TABLET} {
    ${({ theme }) => theme.typographies.TITLE}
  }
`;
const PartCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 60px;
  margin: 0 5px;
  @media ${({ theme }) => theme.devices.MOBILE} {
    margin: 0 30px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 0 40px;
    flex-direction: row;
  }
`;
const AssignmentContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  @media ${({ theme }) => theme.devices.MOBILE} {
    padding: 0 30px;
  }
  white-space: pre-line;
  word-break: keep-all;
`;
const AssignmentBoxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @media ${({ theme }) => theme.devices.TABLET} {
    gap: 40px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    gap: 70px;
  }
`;
const AdditionalInfoLink = styled.p`
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  color: #939393;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 16px;
    line-height: 24px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 20px;
  }
  align-self: center;
`;
const AdditionalInfo = styled.p`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  color: #939393;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;

  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 16px;
    line-height: 24px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 20px;
  }
  align-self: center;
`;
const Link = styled.a`
  color: ${({ theme }) => theme.colors.MAIN_PINK};
  text-underline-position: under;
  text-decoration-thickness: 2px;
`;

export default Main;
