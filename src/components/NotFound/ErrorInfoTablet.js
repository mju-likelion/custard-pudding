import styled from 'styled-components';
import { ERROR_DATA } from '../../pages/NotFound/data/ErrorData';

const ErrorInfoTablet = () => {
  return <Content>{ERROR_DATA.infoTablet}</Content>;
};
const Content = styled.p`
  white-space: pre-line;
  font-size: 15px;
  font-weight: 300;
  line-height: 24px;
  margin-bottom: 16px;
`;
export default ErrorInfoTablet;
