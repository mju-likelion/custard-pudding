import styled from 'styled-components';
import TAG from '../../assets/imgs/card_tag.svg';
import { resultData } from './resultData';

const CheckCard = ({ status }) => {
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
      <Content>{result.content}</Content>
      <Icon src={result.img} />
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 240px;
  height: 300px;
  position: relative;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors.MODAL_BG};
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 400px;
    height: 530px;
  }
`;
const Tag = styled.img`
  display: block;
  margin: -37px auto 0;
  width: 60px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 130px;
    margin: -78px auto 0;
  }
`;
const Content = styled.div`
  margin: 60px auto 0;
  line-height: 30px;
  text-align: center;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  ${({ theme }) => theme.typographies.DEFAULT_TXT};
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 300px;
    margin: 90px auto 0;
    line-height: 60px;
    font-size: 32px;
    font-weight: 700;
  }
`;
const Icon = styled.img`
  width: 150px;
  height: 95px;
  position: absolute;
  right: 30px;
  bottom: 0;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 310px;
    height: 190px;
    ${({ theme }) => theme.typographies.TITLE};
  }
`;
export default CheckCard;
