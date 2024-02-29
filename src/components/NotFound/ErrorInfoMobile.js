import styled from 'styled-components';
import { ERROR_DATA } from '../../pages/NotFound/data/ErrorData';

const ErrorInfoMobile = () => {
  return <Content>{ERROR_DATA.infoMobile}</Content>;
};
const Content = styled.p`
  white-space: pre-line;
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
  margin-bottom: 20px;
`;
export default ErrorInfoMobile;
