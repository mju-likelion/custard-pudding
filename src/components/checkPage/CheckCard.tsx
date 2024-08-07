import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SmallButton from './SmallButton';
import { resultData } from './resultData';

interface CheckCardProps {
  status: 'checkSuccess' | 'checkFailed' | 'rejected';
  studentId: string;
}

const TAG = process.env.REACT_APP_S3_URL;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors.background200};

  width: 240px;
  height: 300px;
  @media ${({ theme }) => theme.size.tablet} {
    width: 340px;
    height: 420px;
    margin-top: 50px;
  }
`;
const Tag = styled.img`
  display: block;

  width: 70px;
  margin: -44px auto 0;
  @media ${({ theme }) => theme.size.tablet} {
    width: 105px;
    margin: -65px auto 0;
  }
`;
const Content = styled.div`
  margin: 30px 0 20px;
  text-align: center;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.typographies.defaultTxt};
  line-height: 30px;

  @media ${({ theme }) => theme.size.tablet} {
    font-size: 28px;
    font-weight: 700;
    line-height: 45px;
  }
`;
const Icon = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 150px;
  height: 95px;
  @media ${({ theme }) => theme.size.tablet} {
    width: 200px;
    height: 160px;
    ${({ theme }) => theme.typographies.title};
  }
`;

const CheckCard = ({ status, studentId }: CheckCardProps) => {
  const navigate = useNavigate();
  const applyResult = resultData[status];

  return (
    <CardContainer>
      <Tag src={TAG} />
      <Content>{studentId + applyResult.content}</Content>
      <Icon src={applyResult.img} />
      <SmallButton type="button" onClick={() => navigate('/')}>
        메인으로
      </SmallButton>
    </CardContainer>
  );
};

export default CheckCard;
