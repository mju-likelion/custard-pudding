import styled from 'styled-components';
import { PropsWithChildren } from 'react';
import { ReactComponent as CardString } from '../../assets/imgs/card_string_bg.svg';

interface CardLanyardProps {
  width: string;
  height: string;
  $pcWidth: string;
  $pcHeight: string;
}

const CardLanyard = ({
  width,
  height,
  $pcWidth,
  $pcHeight,
  children,
}: PropsWithChildren<CardLanyardProps>) => {
  return (
    <CardContainer
      width={width}
      height={height}
      $pcWidth={$pcWidth}
      $pcHeight={$pcHeight}
    >
      <NameCardString />
      <CardBody>{children}</CardBody>
    </CardContainer>
  );
};

const CardContainer = styled.div<CardLanyardProps>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  @media ${({ theme }) => theme.size.desktop} {
    width: ${({ $pcWidth }) => $pcWidth};
    height: ${({ $pcHeight }) => $pcHeight};
  }
`;

const NameCardString = styled(CardString)`
  left: 50%;
  transform: translate(-50%);
  position: absolute;
  top: -44px;
  width: 64px;
  height: 62px;
  @media ${({ theme }) => theme.size.desktop} {
    top: -88px;
    width: 126px;
    height: 122px;
  }
`;

const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background200};
  border-bottom: 24px;
  box-shadow: 7px 6px 0.4em #161515;
  border-radius: 24px;
  width: 100%;
  height: 100%;
`;

export default CardLanyard;
