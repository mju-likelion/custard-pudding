import styled from 'styled-components';
import CardLanyard from '../components/CardLanyard/CardLanyard';

const Check = () => {
  return (
    <Container>
      <CardLanyard width={'532px'} height={'296px'}></CardLanyard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export default Check;
