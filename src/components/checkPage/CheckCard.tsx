import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SmallButton from './SmallButton';
import { resultData } from './resultData';

interface CheckCardPrpps {
  status: 'check_success' | 'check_failed' | 'rejected';
  value: string;
}

const TAG =
  'https://likelion12th-apply-pages.s3.ap-northeast-2.amazonaws.com/svgs/card_tag_upload.svg';

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

const CheckCard = ({ status, value }: CheckCardPrpps) => {
  const navigate = useNavigate();
  let result = {};

  switch (status) {
    case 'check_success':
      result = resultData['check_success'];
      break;

    case 'check_failed':
      result = resultData['check_failed'];
      break;

    case 'rejected':
      result = resultData['rejected'];
      break;
  }

  return (
    <CardContainer>
      <Tag src={TAG} />
      <Content>{value + result.content}</Content>
      <Icon src={result.img} />
      <SmallButton type="button" onClick={() => navigate('/')}>
        메인으로
      </SmallButton>
    </CardContainer>
  );
};

export default CheckCard;
