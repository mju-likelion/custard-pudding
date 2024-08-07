import styled from 'styled-components';
import { ERROR_DATA } from '../../pages/NotFound/data/ErrorData';

const Content = styled.p`
  white-space: pre-line;
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 20px;
`;

const ErrorInfo = () => {
  return <Content>{ERROR_DATA.infoDesktop}</Content>;
};

export default ErrorInfo;
