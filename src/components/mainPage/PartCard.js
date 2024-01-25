import styled from 'styled-components';
import card_ring from '../../assets/card_ring.svg';

const PartCard = ({ part, icon, content, techList }) => {
  return (
    <CardContainer>
      <Ring src={card_ring} />
      <Card>
        <Part>
          <PartTitle>{part}</PartTitle>
          <Icon src={icon} />
        </Part>
        <Content>{content}</Content>
        <TechList>{techList}</TechList>
      </Card>
    </CardContainer>
  );
};

const CardContainer = styled.div``;
const Ring = styled.img`
  width: 58px;
  margin: -17px 0 0 -20px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 105px;
    margin: -30px 0 0 -36px;
  }
  position: absolute;
  z-index: 1;
`;
const Card = styled.div`
  width: 280px;
  height: 190px;
  padding: 10px 15px 15px 20px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 490px;
    height: 300px;
    padding: 10px 20px 20px 30px;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  border-radius: 30px;
`;
const Part = styled.div`
  align-self: end;
  display: flex;
  align-items: center;
`;
const PartTitle = styled.p`
  margin-right: 10px;
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  @media ${({ theme }) => theme.devices.TABLET} {
    ${({ theme }) => theme.typographies.SUB_TITLE}
  }
`;
const Icon = styled.img`
  width: 35px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 64px;
  }
`;
const Content = styled.p`
  ${({ theme }) => theme.typographies.M_DEFAULT_TXT}
  line-height: 30px;
  @media ${({ theme }) => theme.devices.TABLET} {
    ${({ theme }) => theme.typographies.BIG_TXT}
  }
}
`;
const TechList = styled.p`
  ${({ theme }) => theme.typographies.M_SMALL_TXT}
  @media ${({ theme }) => theme.devices.TABLET} {
    ${({ theme }) => theme.typographies.SMALL_TXT}
    line-height: 23px;
  }
`;

export default PartCard;
