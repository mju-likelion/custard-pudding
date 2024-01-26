import styled from 'styled-components';
import { ReactComponent as CardString } from '../../assets/imgs/card_string.svg';

/**
 * @param {string} width
 * @param {string} height
 */

const CardLanyard = ({ width, height, children }) => {
  return (
    <CardContainer>
      <NameCardString />
      <CardBody width={width} height={height}>
        {children}
      </CardBody>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
`;

const NameCardString = styled(CardString)`
  position: absolute;
  top: -88px;
  left: 50%;
  transform: translate(-50%);
`;

const CardBody = styled.div`
  background-color: ${({ theme }) => theme.colors.MODAL_BG};

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-bottom: 24px;
  box-shadow: 7px 6px 0.4em #161515;
  border-radius: 24px;
`;

export default CardLanyard;
