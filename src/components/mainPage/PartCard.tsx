import styled from 'styled-components';
import card_ring from '../../assets/imgs/card_ring.svg';
import { PropsWithChildren } from 'react';

interface PartCardProps {
  partName: string;
  icon?: string;
  content: string;
  techList: string;
}

const CardContainer = styled.div`
  position: relative;
`;
const Ring = styled.img`
  width: 58px;
  margin: -17px 0 0 -20px;
  @media ${({ theme }) => theme.size.tablet} {
    width: 105px;
    margin: -30px 0 0 -36px;
  }
  position: absolute;
  z-index: 1;
`;
const Card = styled.div`
  width: 280px;
  height: 200px;
  padding: 10px 15px 15px 20px;
  @media ${({ theme }) => theme.size.tablet} {
    width: 490px;
    height: 300px;
    padding: 10px 20px 20px 30px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background300};
  border-radius: 30px;
`;
const Part = styled.div`
  height: 35px;
  @media ${({ theme }) => theme.size.tablet} {
    height: 62px;
  }
  align-self: end;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const PartTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  @media ${({ theme }) => theme.size.tablet} {
    ${({ theme }) => theme.typographies.subtitle}
  }
`;
const Icon = styled.img`
  width: 35px;
  @media ${({ theme }) => theme.size.tablet} {
    width: 64px;
  }
`;
const Content = styled.p`
  ${({ theme }) => theme.typographies.mDefault}
  line-height: 30px;
  @media ${({ theme }) => theme.size.tablet} {
    ${({ theme }) => theme.typographies.bigTxt}
    line-height: 40px;
  }
`;
const TechList = styled.p`
  ${({ theme }) => theme.typographies.mSmall}
  line-height: 14px;
  @media ${({ theme }) => theme.size.tablet} {
    ${({ theme }) => theme.typographies.smallTxt}
    line-height: 23px;
  }
`;

const PartCard = ({
  partName,
  icon,
  content,
  techList,
}: PropsWithChildren<PartCardProps>) => {
  return (
    <CardContainer>
      <Ring src={card_ring} />
      <Card>
        <Part>
          <PartTitle>{partName}</PartTitle>
          <Icon src={icon} />
        </Part>
        <Content>{content}</Content>
        <TechList>{techList}</TechList>
      </Card>
    </CardContainer>
  );
};

export default PartCard;
