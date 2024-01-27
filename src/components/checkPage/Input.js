import styled from 'styled-components';

const Input = () => {
  return (
    <Wrapper>
      <StyledP>지원 아이디</StyledP>
      <StypledInput />
    </Wrapper>
  );
};

const StyledP = styled.p`
  ${({ theme }) => theme.typographies.BIG_TXT};
  text-align: left;
  margin-bottom: 4px;
`;

const StypledInput = styled.input`
  width: 438px;
  height: 56px;
  background: transparent;
  border: 1px solid #d4d4d8;
  ${({ theme }) => theme.typographies.DEFAULT_TXT};
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  padding: 18px 16px;
  border-radius: 8px;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 148px;
`;

export default Input;
